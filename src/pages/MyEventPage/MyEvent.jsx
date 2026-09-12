import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";

import data from "../../data/user.json";

import style from "./MyEvent.module.scss";
import { Component } from "react";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
}

export class MyEvent extends Component {
    state = {
        games: [],
        currentPage: 1,
    }

    deleteCard = (event) => {
        const clikedCard = event.target.parentElement.id;
        const indexCardToDelete = this.state.games.findIndex(game => game.id === clikedCard)
        this.state.games.splice(indexCardToDelete, 1)

        this.setState({
            games: this.state.games
        })
    }

    paginate = (pageNumber) => {
        const startIndex = (pageNumber - 1) * 9;
        const endIndex = startIndex + 9;
        
        this.setState({
            games: data.games.slice(startIndex, endIndex),
            currentPage: pageNumber
        })
    }

    async componentDidMount(){
        try {
            const data = await fetch("https://6aa2acebccb3db9689a6e211.mockapi.io/user");
            const userData = await data.json();

            this.setState({
                games: userData[0].games,
            })
        } catch (error) {
            console.log(error);
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
                        {this.state.games.map((obj) => (
                            <MyEventItem deleteCard={this.deleteCard} key={obj.id} obj={obj} />
                        ))}
                    </ul>
                    <Pagination paginate={this.paginate} paginateData={data.games} currentPage={this.state.currentPage} />
                </Container>
            </section>
        )
    }

};
