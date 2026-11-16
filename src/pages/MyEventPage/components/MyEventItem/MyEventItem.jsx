import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getGamePlayersThunk } from "../../../../redux/slices/playersSlice/playersThunks.js";

import { DraftCard } from "../DraftCard/DraftCard.jsx";
import { GameCardHeader } from "../GameCardHeader/GameCardHeader.jsx";
import { GameCardInfo } from "../GameCardInfo/GameCardInfo.jsx";
import { MatchPanel } from "../MatchPanel/MatchPanel.jsx";
import { GameCardActions } from "../GameCardActions/GameCardActions.jsx";

import style from "./MyEventItem.module.scss";
import {
    SPORT_LABELS,
    formatDateTime,
    formatDuration,
    formatPrice,
    formatLevel,
} from "./MyEventItem.utils.js";

export const MyEventItem = ({ obj, deleteCard }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const players = useSelector((s) => s.players.playersPerGames[obj.id]?.players);
    const status = useSelector((s) => s.players.playersPerGames[obj.id]?.status);
    const myId = useSelector((s) => s.auth.profile.id);

    useEffect(() => { dispatch(getGamePlayersThunk(obj.id)) }, []);

    if (!players || status === "loading") return <li>Завантаження</li>;

    if (obj.status === "Draft") {
        return <DraftCard obj={obj} deleteCard={deleteCard} />;
    }

    const myTeam = players.find((p) => p.user_id === myId)?.team;
    const winingTeam = obj.winning_team;

    const result = !winingTeam
        ? "draw"
        : myTeam === winingTeam
            ? "win"
            : "loss"; // "win" | "loss" | "draw"

    const teamA = {
        name: "Team A",
        players: players?.filter((p) => p.team === "A") || [],
        isWinner: obj.winning_team === "A",
        caption: myTeam === "A" ? "Ви" : "",
    };

    const teamB = {
        name: "Team B",
        players: players?.filter((p) => p.team === "B") || [],
        isWinner: obj.winning_team === "B",
        caption: myTeam === "B" ? "Ви" : "",
    };
    const participants = { name: "Учасники матчу", players: [] };
    const scoreCaption = result === "draw" ? "Нічия (Draw)" : "Фінальний рахунок";

    return (
        <li className={style.game}>
            <GameCardHeader
                sportLabel={SPORT_LABELS[obj.sport]}
                levelLabel={formatLevel(obj.level_min, obj.level_max)}
                result={result}
            />

            <GameCardInfo
                dateTime={formatDateTime(obj.started_at)}
                dateTimeISO={obj.started_at}
                duration={formatDuration(obj.duration_time)}
                price={formatPrice(obj.price, obj.currency)}
                location={`${obj.location}${obj.court ? ` • Корт ${obj.court}` : ""}`}
            />

            <MatchPanel
                result={result}
                teamA={teamA}
                teamB={teamB}
                participants={participants}
                score={obj.score}
                scoreCaption={scoreCaption}
            />

            <GameCardActions
                to={`/my-events/${obj.id}`}
                linkState={{ from: location }}
                onDelete={deleteCard}
            />
        </li>
    );
};
