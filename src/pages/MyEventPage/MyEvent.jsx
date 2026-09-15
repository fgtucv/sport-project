import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";

import style from "./MyEvent.module.scss";
import { Component } from "react";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
};

const PAGE_SIZE = 9;

export class MyEvent extends Component {
    state = {
        allGames: [],
        renderGames: [],
        currentPage: 1,
    }

    getSlicedGames = (gamesList, page) => {
        const totalPages = Math.ceil(gamesList.length / PAGE_SIZE) || 1;
        const validPage = page > totalPages ? totalPages : page;
        const startIndex = (validPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;

        return {
            slicedGames: gamesList.slice(startIndex, endIndex),
            validPage: validPage,
        };
    }

    deleteCard = (event) => {
        const clickedCardId = event.target.parentElement.id;
        const newArray = this.state.allGames.filter(game => game.id !== clickedCardId);

        this.reloadApiAndState(newArray);
    }

    reloadApiAndState = async (newData) => {
        try {
            const patchResponse = await fetch(
                `https://6aa2acebccb3db9689a6e211.mockapi.io/user/${JSON.parse(localStorage.getItem("userId"))}`,
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        games: newData,
                    }),
                }
            );

            if (patchResponse.ok) {
                this.setState((prevState) => {
                    const { slicedGames, validPage } = this.getSlicedGames(newData, prevState.currentPage);

                    return {
                        allGames: newData,
                        currentPage: validPage,
                        renderGames: slicedGames,
                    };
                });
            }
        } catch (error) {
            console.error("Помилка при оновленні списку ігор:", error);
        }
    }

    paginate = (pageNumber) => {
        const { slicedGames } = this.getSlicedGames(this.state.allGames, pageNumber);

        this.setState({
            renderGames: slicedGames,
            currentPage: pageNumber,
        });
    }

    async componentDidMount() {
        try {
            const data = await fetch(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${JSON.parse(localStorage.getItem("userId"))}`);
            const userData = await data.json();

            const games = userData.games || [];
            const { slicedGames } = this.getSlicedGames(games, 1);

            this.setState({
                allGames: games,
                renderGames: slicedGames,
                currentPage: 1,
            });
        } catch (error) {
            console.error("Помилка завантаження даних:", error);
        }
    }

    render() {
        return (
            <section className={style.myEvent}>
                <Container>
                    <MainTitle text={text} />
                    <div className={style.myEventFilter}>
                        <ul className={style.myEventTypes}>
                            <li className={style.myEventType + ' ' + style.activeType}>Всі</li>
                            <li className={style.myEventType}>Минулі</li>
                            <li className={style.myEventType}>Майбутні</li>
                            <li className={style.myEventType}>Чернетки</li>
                        </ul>
                        <Sorted />
                    </div>
                    <ul className={style.myEventGames}>
                        {this.state.renderGames.map((obj) => (
                            <MyEventItem deleteCard={this.deleteCard} key={obj.id} obj={obj} />
                        ))}
                    </ul>
                    <Pagination 
                        paginate={this.paginate} 
                        paginateData={this.state.allGames} 
                        currentPage={this.state.currentPage} 
                    />
                </Container>
            </section>
        );
    }
}