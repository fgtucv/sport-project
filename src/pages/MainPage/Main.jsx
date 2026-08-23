import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { Category } from "../../components/Category/Category.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Container } from "../../components/Container/Container";
import { GameItem } from "./components/GameItem/GameItem.jsx";
import { GameMobileItem } from "./components/GameMobileItem/GameMobileItem.jsx";

import daysData from "../../data/days.json";
import gamesData from "../../data/AllGames.json";

import style from "./Main.module.scss";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
}

export const Main = () => {
    const isMobile = window.matchMedia('(max-width: 1279px)');

    return <main className={style.main}>
        <Container>
            <MainTitle text={text} />
            <ul className={style.mainDates}>
                {
                    daysData.map((day) => (
                        <li className={style.mainDateItem + (day.isSelected ? ' ' + style.activeDay : '')} key={day.id}>
                            <h3 className={style.mainDate}>{day.dayOfWeek}<br /><span className={style.mainDateDay}>{day.dayNumber}</span><br />{day.monthLabel}</h3>
                        </li>
                    ))
                }
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
}
