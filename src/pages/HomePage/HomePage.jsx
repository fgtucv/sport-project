// react
import { useEffect, useState, useMemo } from "react";
// library
// import axios from "axios";                                // TODO: більше не потрібен, якщо працюєте через Supabase
// custome hooks and conetexts
// import { useFetch } from "../../hooks/useFetch.jsx";      // не використовувався
// import { useAuth } from "../../contexts/useAuth.jsx";     // TODO: повернути, коли робитимете логіку рівня/приєднання
// import { useNavigate } from "react-router-dom";           // TODO: потрібен для joinToGame
// components
import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { DateItem } from "./components/DateItem/DateItem.jsx";
// import { Category } from "../../components/Category/Category.jsx"; // замінено фільтром нижче (потрібен був інший вигляд)
// import { Sorted } from "../../components/Sorted/Sorted.jsx";       // замінено текстом "Знайдено N ігор"
import { GameItem } from "./components/GameItem/GameItem.jsx";
// this page
import style from "./HomePage.module.scss";
import { TEXT_DATA, SPORT_FILTERS, getUpcomingDays } from "./HomePage.constants.js";

import { getGamesService } from "../../api/services/gamesServices.js";

// "1 гра", "2 гри", "5 ігор"
const gamesWord = (n) => {
    const last = n % 10;
    const lastTwo = n % 100;
    if (lastTwo >= 11 && lastTwo <= 14) return "ігор";
    if (last === 1) return "гра";
    if (last >= 2 && last <= 4) return "гри";
    return "ігор";
};

export default function HomePage() {
    // const navigate = useNavigate();
    // const { user, isAuth } = useAuth();
    const [games, setGames] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const { isMobile } = useContext(IsMobileContext);

    // TODO: рівень поточного користувача (було: user?.profile?.rating). Поки null = обмежень за рівнем немає.
    const myLevel = null;

    const days = useMemo(() => getUpcomingDays(14), []);

    // Було [games] у залежностях: effect сам змінював games і запускався у нескінченному циклі.
    useEffect(() => {
        async function loadGames() {
            try {
                setLoading(true);
                setError(null);

                const data = await getGamesService();
                setGames(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setError(err?.message ?? "Невідома помилка");
                setGames([]);
            } finally {
                setLoading(false);
            }
        }

        loadGames();
    }, []);

    /* ---------------------------------------------------------------
       TODO: ваші функції, закоментовано, щоб ви переробили самі.
       ---------------------------------------------------------------

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
        if (!user) {
            navigate("/login");
            return
        }

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
            const respons = await axios.put(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${user.id}`,
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
    --------------------------------------------------------------- */

    // Фільтр за видом спорту (раніше був setState усередині useMemo, що давало зайві рендери)
    const filteredGames = useMemo(() => {
        if (category === "all") return games;

        return games.filter(
            (game) => String(game.sport ?? game.sportType ?? "").toLowerCase() === category
        );
    }, [category, games]);

    return (
        <section className={style.main}>
            <Container>
                <MainTitle text={TEXT_DATA} />

                <div className={style.filter}>
                    <div className={style.filterButtons} role="group" aria-label="Вид спорту">
                        {SPORT_FILTERS.map((item) => (
                            <button
                                key={item.value}
                                type="button"
                                className={`${style.filterBtn} ${category === item.value ? style.filterBtnActive : ""}`}
                                aria-pressed={category === item.value}
                                onClick={() => setCategory(item.value)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {!loading && !error && (
                        <span className={style.filterCount}>
                            Знайдено {filteredGames.length} {gamesWord(filteredGames.length)}
                        </span>
                    )}
                </div>

                <ul className={style.mainDates}>
                    {days.map((day) => (
                        <DateItem day={day} key={day.id} />
                    ))}
                </ul>
                {/* TODO: вибір дня. Зараз це лише відображення, кліки нічого не роблять і ігри за днем не фільтруються. */}
                <div className={style.placeholder}>Вибір дня поки недоступний: функцію треба додати.</div>

                {loading && <p className={style.status}>Завантаження ігор…</p>}
                {!loading && error && (
                    <p className={`${style.status} ${style.statusError}`}>Не вдалося завантажити ігри: {error}</p>
                )}
                {!loading && !error && filteredGames.length === 0 && (
                    <p className={style.status}>Ігор за цим фільтром поки немає.</p>
                )}

                {!loading && !error && filteredGames.length > 0 && (
                    <ul className={style.games}>
                        {filteredGames.map((game) => (
                            <GameItem
                                key={game.id}
                                obj={game}
                                rating={myLevel}
                                // joinToGame={joinToGame} // TODO: підключити, коли перероблена функція буде готова
                            />
                        ))}
                    </ul>
                )}
            </Container>
        </section>
    );
}
