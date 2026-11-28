import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPastGamesThunk } from "../../redux/slices/gamesSlice/gamesThunks.js";
import {
    selectPastGames,
    selectPastStatus,
    selectPastError
} from "../../redux/slices/gamesSlice/selectors.js";

import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";
import { EventFilter } from "./components/EventFilter/EventFilter.jsx";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";

import { TEXT_DATA } from "./MyEventPage.constants.js";

import style from "./MyEventPage.module.scss";

export default function MyEventPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const session = useSelector((s) => s.auth.session);
    const games = useSelector(selectPastGames);
    const status = useSelector(selectPastStatus);
    const error = useSelector(selectPastError);

    useEffect(() => {
        if (!session) {
            navigate('/login');
            return;
        }

        dispatch(getPastGamesThunk(session.user.id))
    }, [])

    return (
        <section className={style.myEvent}>
            <Container>
                <MainTitle text={TEXT_DATA} />
                <EventFilter />
                <ul className={style.myEventGames}>
                    {games && games.length > 0 ? (
                        games.map((obj) => <MyEventItem key={obj.id} obj={obj} />)
                    ) : (
                        <NoData />
                    )}
                </ul>
            </Container>
        </section >
    );
};
