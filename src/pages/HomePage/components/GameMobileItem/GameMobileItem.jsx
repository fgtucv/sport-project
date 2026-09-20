import { ComeToGameIcon, LocationIcon } from "../../../../components/Icons/Icons";
import style from "./GameMobileItem.module.scss";

const myLevel = 2;

export const GameMobileItem = ({ obj }) => {
    const iSMyLevelUnavailable = myLevel <= obj.level && obj.isStrict ? true : false;

    return (
        <li className={`${style.gameItem}  ${(iSMyLevelUnavailable || obj.isFull ? style.unavailable : style.available)}`}>
            <div className={style.gameHeader}>
                <div className={style.gameHeaderFlexGroup}>
                    <mark className={style.gameBadgeSport}>{obj.sportType}</mark>
                    <mark className={style.gameBadgeLevel}>Level: {obj.level}</mark>
                    <span className={style.gamePriceValue}>{obj.price / 4} €</span>
                </div>
                <time className={style.gameTime} dateTime={obj.time}>{obj.time} • {obj.durationMinutes} хв</time>
            </div>

            <address className={style.gameLocation}>
                <LocationIcon className={style.gameLocationIcon} />{obj.clubName}, {obj.courtNumber}
            </address>

            <div className={style.gamePlayers}>
                <figure className={style.gameAvatarsGroup}>
                    {obj.players.map((player) => (
                        <img
                            key={player.nickname}
                            className={style.gameAvatarImg}
                            src={player.avatarUrl}
                            alt={`Гравець ${player.nickname}`}
                        />
                    ))}
                    {obj.maxPlayers > obj.currentPlayers ? <button type="button" className={style.gameAddPlayerBtn} aria-label="Додати гравця"><ComeToGameIcon className={style.gameAddPlayerIcon} /></button> : ""}
                </figure>
                <span className={style.gamePlayersCount}>{obj.maxPlayers > obj.currentPlayers ? `${obj.currentPlayers} / ${obj.maxPlayers} гравців` : ""}</span>
            </div>

            <div className={style.gameFooter}>
                <span className={style.gameStrictLevel}>
                    {iSMyLevelUnavailable ? "У цієї гри строгий рівень" : obj.isFull ? "Забагато гравців" : ""}
                </span>
                <button type="button" className={style.gameJoinBtn}>{obj.isFull ? "Немає місць" : iSMyLevelUnavailable ? "Рівень занизький" : "Приєднатися"}</button>
            </div>
        </li>)
}