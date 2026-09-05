import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { DateItem } from "./components/DateItem/DateItem.jsx";
import { Category } from "../../components/Category/Category.jsx";
import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { GameItem } from "./components/GameItem/GameItem.jsx";
import { GameMobileItem } from "./components/GameMobileItem/GameMobileItem.jsx";

import style from "./Main.module.scss";

import daysData from "../../data/days.json";
import gamesData from "../../data/AllGames.json";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
}

export const Main = () => {
    const isMobile = window.matchMedia('(max-width: 1279px)');

    return (
        <main className={style.main}>
            <Container>

                <MainTitle text={text} />
                <ul className={style.mainDates}>
                    {daysData.map(day => <DateItem day={day} key={day.id} />)}
                </ul>
                <div className={style.mainFilter}>
                    <Category />
                    <Sorted />
                </div>
                <ul className={style.games}>
                    {gamesData.map((game) => (
                        isMobile.matches ? <GameMobileItem key={game.id} obj={game} /> : <GameItem key={game.id} obj={game} />
                    ))}
                </ul>

            </Container>
        </main>
    )
};