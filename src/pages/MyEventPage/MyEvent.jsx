import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";

import data from "../../data/MyEvenst.json";

import style from "./MyEvent.module.scss";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
}

export const MyEvent = () => {
    return <section className={style.myEvent}>
        <Container>
            <MainTitle text={text}/>
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
                {data.map((obj) => (
                    <MyEventItem key={obj.id} obj={obj} />
                ))}
            </ul>
        </Container>
    </section>
};
