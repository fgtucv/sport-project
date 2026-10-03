import {
    ComeToGameIcon,
    InfoIcon,
    LocationIcon,
} from "../../../../components/Icons/Icons";
import { userStore } from "../../../../contexts/useUserStore";
import style from "./GameItem.module.scss";

const myLevel = 4;

export const GameItem = ({ obj, joinToGame, rating }) => {
    const myLevel = rating;
    const iSMyLevelUnavailable = myLevel <= obj.level && obj.isStrict ? true : false;
    const isFull = obj.maxPlayers <= obj.players.length;

    return (
        <li className={`${style.gameItem} ${(isFull || iSMyLevelUnavailable) ? style.isFullgame : ''}`}>
            <div className={style.gameHeader}>
                <div className={style.gameBadgesGroup}>
                    <div className={style.gameTagsRow}>
                        <span className={style.gameBadgeSport}>{obj.sportType}</span>
                        <mark className={style.gameBadgeLevel}>level: {obj.level}</mark>
                    </div>
                    <span className={`${style.gameStrictLevel} ${obj.isStrict ? style.stick : ''}`}>
                        <InfoIcon className={style.gameStrictIcon} />
                        {obj.isStrict ? "Строгий рівеннь" : "Будь-який рівень"}
                    </span>
                </div>
                <div className={style.gameTimeGroup}>
                    <time className={style.gameTime} dateTime={obj.time}>{obj.time}</time>
                    <span className={style.gameDuration}>{obj.durationMinutes + " хв"}</span>
                </div>
            </div>

            <address className={style.gameLocation}>
                <LocationIcon className={style.gameLocationIcon} />
                <div className={style.gameLocationInfo}>
                    <strong className={style.gameClubName}>{obj.clubName}</strong>
                    <span className={style.gameCourtName}>Корт №{obj.courtNumber}</span>
                </div>
            </address>

            <div className={style.gamePlayers}>
                <figure className={style.gameAvatarsGroup}>
                    {obj.players.map((player, index) => {                        
                        return (<img
                            key={`${player.id}-${index}`}
                            className={style.gameAvatarImg}
                            src={player.avatarUrl}
                            alt={`Гравець ${player.username}`}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/17561/17561717.png';
                            }}
                        />)
                    })}
                    {obj.maxPlayers > obj.players.length ? <button type="button" className={style.gameAddPlayerBtn} aria-label="Додати гравця"><ComeToGameIcon className={style.gameAddPlayerIcon} /></button> : ""}
                </figure>
                <span className={style.gamePlayersCount}>{isFull ? "Місьці немає" : iSMyLevelUnavailable ? "Зависокий рівнень" : `${obj.currentPlayers} / ${obj.maxPlayers} гравців`}</span>
            </div>

            <div className={style.gameFooter}>
                <div className={style.gamePriceGroup}>
                    <span className={style.gamePriceLabel}>Ціна з гравця</span>
                    <span className={style.gamePriceValue}>{obj.price / 4} €</span>
                </div>
                <button type="button" onClick={() => joinToGame(obj.id)} className={style.gameJoinBtn}>{(isFull || iSMyLevelUnavailable) ? "Недоступно" : "Приєднатися"}</button>
            </div>
        </li>
    )
};