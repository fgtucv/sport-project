import { useContext, useEffect, useState } from "react";

import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { Sorted } from "../../components/Sorted/Sorted";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";
import { userStore } from "../../contexts/userStore/userStore.jsx";

import { LoginedUserContext } from '../../contexts/userStore/userStore.jsx';

import style from "./MyEvent.module.scss";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
};

const PAGE_SIZE = 9;

export const MyEvent = () => {
    const { user, isLoading } = userStore();

    // const [currentPage, setRenderedGames] = useState(1);

    if (isLoading || !user) return <div>завантаження...</div>;

    const games = user.games

    return (
        <section className={style.myEvent}>
            <Container>
                <MainTitle text={text} />
                <div className={style.myEventFilter}>
                    <ul className={style.myEventTypes}>
                        <li className={`${style.myEventType} ${style.activeType}`}>Всі</li>
                        <li className={style.myEventType}>Минулі</li>
                        <li className={style.myEventType}>Майбутні</li>
                        <li className={style.myEventType}>Чернетки</li>
                    </ul>
                    <Sorted />
                </div>
                <ul>
                    {games.length > 0 ? (
                        games.map((obj) => (
                            <MyEventItem
                                key={obj.id}
                                obj={obj}
                            />
                        ))
                    ) : (
                        <NoData />
                    )}
                </ul>

                {/* {allGames.length > PAGE_SIZE && (
                    <Pagination
                        // paginate={paginate}
                        paginateData={user.games}
                        currentPage={currentPage}
                    />
                )} */}
            </Container>
        </section >
    );
};