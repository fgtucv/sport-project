import { useEffect, useState } from "react";
import userNotFound from "../../../../../../assets/userNotFound.svg";
import { getGamePlayers } from "../../../../../../api/services/playersServices.js";
import style from "./GamePlayers.module.scss";

export const GamePlayers = ({ gameId, maxPlayers }) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadingPlayers() {
            try {
                const data = await getGamePlayers(gameId);

                setPlayers(data);
                setError(null);
            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadingPlayers();
    }, []);

    if (loading) {
        return (
            <div className={style.gamePlayersPlaceholder}>Завантаження...</div>
        )
    } else if (error) {
        return (
            <div className={style.gamePlayersPlaceholder}>Невдолось завантажити гравців</div>
        )
    } else if (players.length === 0) {
        return (
            <div className={style.gamePlayersPlaceholder}>Немає граців</div>
        )
    }

    const playersCount = players.length;

    return (
        <div className={style.gamePlayers}>
            <ul className={style.gamePlayersList}>
                {
                    players.map((player) => {
                        return (
                            <li className={style.gamePlayer} key={`${gameId}-${player.user_id}`}>
                                <img
                                    className={style.gamePlayerImg}
                                    src={player.profiles.avatar_url || userNotFound}
                                    alt={`Гравець: ${player.profiles.nickname}`}
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