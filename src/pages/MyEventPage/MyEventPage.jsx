import { useDispatch, useSelector } from "react-redux";

import { Container } from "../../components/Container/Container.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { NoData } from "../../components/NoData/NoData.jsx";
import { EventFilter } from "./components/EventFilter/EventFilter.jsx";
import { MyEventItem } from "./components/MyEventItem/MyEventItem.jsx";
// import { Pagination } from "../../components/Pagination/Pagination.jsx";

import style from "./MyEventPage.module.scss";
import { TEXT_DATA, PAGE_SIZE } from "./MyEventPage.constants.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMyPassedGamesThunk } from "../../redux/slices/myPassedGamesSlice/myPassedGamesThunks.js";

export default function MyEventPage () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const session = useSelector((s) => s.auth.session);
    const games = useSelector((s) => s.myPassedGames.games);
    const status = useSelector((s) => s.myPassedGames.status); // loadng, rejected, succeeced

    useEffect(() => {
        if (!session) {
            navigate('/login');
            return;
        }

        dispatch(getMyPassedGamesThunk(session.user.id))
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
