import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { IsMobileContext } from "../../hooks/useFetch.jsx";
import { useFetch } from "../../hooks/useFetch.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { DateItem } from "./components/DateItem/DateItem.jsx";
import { Category } from "../../components/Category/Category.jsx";
import { Sorted } from "../../components/Sorted/Sorted.jsx";
import { GameItem } from "./components/GameItem/GameItem.jsx";
// import { GameMobileItem } from "./components/GameMobileItem/GameMobileItem.jsx";

import style from "./HomePage.module.scss";
import daysData from "../../data/days.json";
import axios from "axios";
import { useUserStore } from "../../contexts/useUserStore.jsx";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
};

const userId = localStorage.getItem("userId").replace(/^"|"$/g, "");

export const HomePage = () => {
    const { user } = useUserStore();
    const [games, setGames] = useState([]);
    const [renderedGames, setRenderedGames] = useState([]);
    const [category, setCategory] = useState("all");
    // const { isMobile } = useContext(IsMobileContext);

    const { data, isLoading, error } = useFetch("https://6aa2acebccb3db9689a6e211.mockapi.io/game");

    useEffect(() => {
        if (data) {
            setGames(data);
        }
    }, [games, data]);

    const addNewPlayer = async (id, game) => {
        const player = {
            "id": user.id,
            "nickname": user.profile.username,
            "avatarUrl": user.profile.avatarUrl
        }

        const newPlayersList = [
            ...game.players,
            player
        ]

        try {
            const respons = await axios.put(`https://6aa2acebccb3db9689a6e211.mockapi.io/game/${id}`,
                {
                    ...game,
                    players: newPlayersList
                }
            );

        } catch (error) {
            console.error(error);
        }

    };

    const joinToGame = async (id) => {
        const foundGame = games.find(game => game.id === id);

        if (foundGame.players.find((palyer) => palyer.id === user.id)) {
            console.log("ви вже доєдналися");
            return;
        }

        const additionalObjectPart = {
            isPaid: false,
            status: "soon",
        }

        const newGame = { ...foundGame, ...additionalObjectPart, };

        const newGames = [...user?.games || [], newGame];

        try {
            const respons = await axios.put(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${userId}`,
                {
                    ...user,
                    games: newGames
                }
            );
        } catch (error) {
            console.error(error)
        }

        addNewPlayer(id, foundGame);
    };

    const sortedGamesCategory = useMemo(
        () => {
            if (category !== "all") {
                const newGames = games.filter(game => game.sportType === category);
                setRenderedGames(newGames);
                return newGames;
            } else {
                setRenderedGames(games);
                return games;
            }

        },
        [category, games]
    );

    // const sortedGames = useCallback(
    //     (sortCategoryId) => {
    //         console.log(sortCategoryId);
    //         if (sortCategoryId === 1) {
    //             setRenderedGames(renderedGames.sort((a, b) => a.price - b.price));
    //             return renderedGames;
    //         } else if (sortCategoryId === 2) {
    //             setRenderedGames(renderedGames.sort((a, b) => b.price + a.price));
    //             return renderedGames;
    //         } else if (sortCategoryId === 3) {
    //             setRenderedGames(renderedGames.sort((a, b) => a.rating - b.rating));
    //             return renderedGames;
    //         } else if (sortCategoryId === 4) {
    //             setRenderedGames(renderedGames.sort((a, b) => b.rating + a.rating));
    //             return renderedGames;
    //         }
    //     },
    //     [games]
    // );

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main className={style.main}>
                <MainTitle text={text} />
                <ul className={style.mainDates}>
                    {daysData.map((day) => (
                        <DateItem day={day} key={day.id} />
                    ))}
                </ul>
                <div className={style.mainFilter}>
                    <Category setCategory={setCategory} />
                    <Sorted
                    //  sortedGames={sortedGames} 
                    />
                </div>

                <ul className={style.games}>
                    {sortedGamesCategory.map((game) => {
                        // isMobile ? (
                        // <GameMobileItem key={game.id} obj={game} />
                        // ) : (
                        // console.log(game.id === "_iHfqFZgtM01bZGYAidus")
                        return <GameItem key={game.id} obj={game} rating={user?.profile?.rating} joinToGame={joinToGame} />
                    }
                        // )
                    )}
                </ul>
        </main>
    );
};