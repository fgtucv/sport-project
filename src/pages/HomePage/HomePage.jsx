import { useContext, useEffect, useState } from "react";
import { IsMobileContext } from "../../contexts/IsMobileContext/IsMobileContext.jsx";
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
import { userStore } from "../../contexts/userStore/userStore.jsx";

const text = {
    title: "Доступні ігри",
    subtitle: "Знайдіть гру для себе щоб пограти",
};

const userId = localStorage.getItem("userId").replace(/^"|"$/g, "");

export const HomePage = () => {
    const user = userStore((state) => state.user)
    const [games, setGames] = useState([]);
    // const { isMobile } = useContext(IsMobileContext);

    useEffect(() => {
        const getGamesFromApi = async () => {
            try {
                const respose = await axios.get("https://6aa2acebccb3db9689a6e211.mockapi.io/game");

                setGames(respose.data);
            } catch (error) {
                console.error(error);
            }
        };

        getGamesFromApi();
    }, []);

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
                    {games.map((game) => {
                        // isMobile ? (
                        // <GameMobileItem key={game.id} obj={game} />
                        // ) : (
                        // console.log(game.id === "_iHfqFZgtM01bZGYAidus")
                        return <GameItem key={game.id} obj={game} rating={user?.profile?.rating} joinToGame={joinToGame} />
                    }
                        // )
                    )}
                </ul>
            </Container>
        </main>
    );
};