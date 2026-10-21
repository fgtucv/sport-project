// components
import { useAuth } from "../../contexts/useAuth.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";
// import { useUserStore } from "../../contexts/useUserStore.jsx";
// this page
import style from "./MyEventPage.module.scss";
import { TEXT_DATA, PAGE_SIZE } from "./MyEventPage.constants.js";

export const MyEventPage = () => {
    // const { user, isLoading } = useUserStore();

    // if (isLoading || !user) return <div>завантаження...</div>;

    // const games = user?.games;

    return (
        <section className={style.myEvent}>
            <Container>
                <MainTitle text={TEXT_DATA} />
                <div className={style.myEventFilter}>
                    <ul className={style.myEventTypes}>
                        <li className={`${style.myEventType} ${style.activeType}`}>Всі</li>
                        <li className={style.myEventType}>Минулі</li>
                        <li className={style.myEventType}>Майбутні</li>
                        <li className={style.myEventType}>Чернетки</li>
                    </ul>
                    <Sorted />
                </div>
                {/* <ul className={style.myEventGames}>
                    {games && games.length > 0 ? (
                        games.map((obj) => <MyEventItem key={obj.id} obj={obj} />)
                    ) : (
                        <NoData />
                    )}
                </ul> */}
            </Container>
        </section >
    );
};