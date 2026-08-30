import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";

import data from "../../data/user.json";

import style from "./MyEvent.module.scss";
import { Component } from "react";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
}

export class MyEvent extends Component {
    state = {
        games: data.games
    }

    deleteCard = (event) => {
        const clikedCard = event.target.parentElement.id;
        const indexCardToDelete = this.state.games.findIndex(game => game.id === clikedCard)
        this.state.games.splice(indexCardToDelete, 1)

        this.setState({
            games: this.state.games
        })
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
                        {console.log(this.state.games)}
                        {this.state.games.map((obj) => (
                            <MyEventItem deleteCard={this.deleteCard} key={obj.id} obj={obj} />
                        ))}
                    </ul>
                </Container>
            </section>
        )
    }

};
