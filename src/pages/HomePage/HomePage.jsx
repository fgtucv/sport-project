// react
import { useEffect, useState, useMemo } from "react";
// custome hooks and conetexts
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
import { useDispatch, useSelector } from "react-redux";

import { getGamesThunk } from "../../redux/slices/gamesSlice/gamesThunks.js";

// "1 гра", "2 гри", "5 ігор"
const gamesWord = (n) => {
    const last = n % 10;
    const lastTwo = n % 100;
    if (lastTwo >= 11 && lastTwo <= 14) return "ігор";
    if (last === 1) return "гра";
    if (last >= 2 && last <= 4) return "гри";
    return "ігор";
};

// const navigate = useNavigate();
// const { user, isAuth } = useAuth();

export default function HomePage() {
    const dispatch = useDispatch();

    const games = useSelector((state) => state.games.games);
    const loading = useSelector((state) => state.games.loading);
    const error = useSelector((state) => state.games.error);

    const [category, setCategory] = useState("all");

    const days = useMemo(() => getUpcomingDays(14), []);

    useEffect(() => {
        dispatch(getGamesThunk())
    }, []);

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
                            />
                        ))}
                    </ul>
                )}
            </Container>
        </section>
    );
}
