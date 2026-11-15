import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getGamePlayers } from "../../../../../../api/services/playersServices.js";

import { getGamePlayersThunk } from "../../../../../../redux/slices/playersSlice/playersThunks.js";

import userNotFound from "../../../../../../assets/userNotFound.svg";

import style from "./GamePlayers.module.scss";

export const GamePlayers = ({ gameId, maxPlayers, getPlayersCount }) => {
    const dispatch = useDispatch();

    const players = useSelector((s) => s.players.playersPerGames[gameId]?.players);
    const status = useSelector((s) => s.players.playersPerGames[gameId]?.status);

    useEffect(() => { dispatch(getGamePlayersThunk(gameId)) }, []);

    if ((status || "loading") === "loading") {
        return (
            <div className={style.gamePlayersPlaceholder}>Завантаження...</div>
        )
    } else if ((status || "loading") === "rejected") {
        return (
            <div className={style.gamePlayersPlaceholder}>Невдолось завантажити гравців</div>
        )
    } else if ((players || []).length === 0) {
        return (
            <div className={style.gamePlayersPlaceholder}>Немає граців</div>
        )
    }

    const playersCount = (players || []).length;   

    return (
        <div className={style.gamePlayers}>
            <ul className={style.gamePlayersList}>
                {
                    players.map((player) => {
                        // console.log(player)
                        return (
                            <li className={style.gamePlayer} key={`${gameId}-${player.user_id}`}>
                                <img
                                    className={style.gamePlayerImg}
                                    src={player.profiles?.avatar_url || userNotFound}
                                    alt={`Гравець: ${player.profiles?.nickname}`}
                                    onError={(event) => {
                                        event.target.onerror = null
                                        event.target.src = userNotFound
                                    }}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <span className={style.gamePlayersCount}>{playersCount} / {maxPlayers} гравців</span>
        </div>
    );
};