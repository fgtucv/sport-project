import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile.js";
import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { DateItem } from "./components/DateItem/DateItem.jsx";
import { Category } from "../../components/Category/Category.jsx";
import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { GameItem } from "./components/GameItem/GameItem.jsx";
import { GameMobileItem } from "./components/GameMobileItem/GameMobileItem.jsx";

import style from "./HomePage.module.scss";
import daysData from "../../data/days.json";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
};

export const HomePage = () => {
    const [games, setGames] = useState([]);
    const isMobile = useIsMobile();

    useEffect(() => {
        const getGamesFromApi = async () => {
            try {
                const data = await fetch("https://6aa2acebccb3db9689a6e211.mockapi.io/game");
                const gamesData = await data.json();

                setGames(gamesData);
            } catch (error) {
                console.log(error);
            }
        };

        getGamesFromApi();
    }, []);

    return (
        <main className={style.main}>
            <Container>
                <MainTitle text={text} />
                <ul className={style.mainDates}>
                    {daysData.map((day) => (
                        <DateItem day={day} key={day.id} />
                    ))}
                </ul>
                <div className={style.mainFilter}>
                    <Category />
                    <Sorted />
                </div>
                <ul className={style.games}>
                    {games.map((game) =>
                        isMobile ? (
                            <GameMobileItem key={game.id} obj={game} />
                        ) : (
                            <GameItem key={game.id} obj={game} />
                        )
                    )}
                </ul>
            </Container>
        </main>
    );
};