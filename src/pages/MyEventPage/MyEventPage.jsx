import { useContext, useEffect, useState } from "react";

import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
import { Pagination } from "../../components/Pagination/Pagination.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";
import { useUserStore } from "../../contexts/useUserStore.jsx";
import style from "./MyEventPage.module.scss";

const text = {
    title: "Ваші ігри",
    subtitle: "Переглядайте свої ігри та керуйте ними",
};

const PAGE_SIZE = 9;

export const MyEventPage = () => {
    const { user, isLoading } = useUserStore();

    if (isLoading || !user) return <div>завантаження...</div>;

    const games = user?.games;

    return (
        <section className={style.myEvent}>
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
            <ul className={style.myEventGames}>
                {games && games.length > 0 ? (
                    games.map((obj) => <MyEventItem key={obj.id} obj={obj} />)
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
        </section >
    );
};