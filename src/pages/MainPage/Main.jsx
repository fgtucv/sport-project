// icon
import { Category } from "../../components/Category/Category";
import { Sorted } from "../../components/Sorted/Sorted";
import { LocationIcon } from "../../components/Icons/Icons";
import { InfoIcon } from "../../components/Icons/Icons";
import { ComeToGameIcon } from "../../components/Icons/Icons";
// data
import daysData from "../../data/days.json";
import gamesData from "../../data/AllGames.json"
// style
import style from "./Main.module.scss";
// components
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Container } from "../../components/Container/Container";
import { GameToJoinItem } from "../../components/GameToJoinItem/GameToJoinItem";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
}

export const Main = () => {
    return <main className={style.main}>
        <Container>
            <MainTitle text={text}/>
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
                {
                    gamesData.map((game) => {return <GameToJoinItem obj={game} /> })
                }
            </ul>
        </Container>
    </main>
}