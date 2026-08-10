// icon
import { LocationIcon } from "../Icons/Icons";
import { InfoIcon } from "../Icons/Icons";
import { ComeToGameIcon } from "../Icons/Icons";
// style
import style from "./GameToJoinItem.module.scss";

export const GameToJoinItem = ({obj}) => {
    return <li className={style.gameItem + ' ' + (obj.isFull ? style.isFullgame : '')}>
        <div className={style.gameHeader}>
            <div className={style.gameBadgesGroup}>
                <div className={style.gameTagsRow}>
                    <span className={style.gameBadgeSport}>{obj.sportType === "PADEL" ? "Падель" : "Теніс"}</span>
                    <mark className={style.gameBadgeLevel}>{obj.level}</mark>
                </div>
                <span className={style.gameStrictLevel + ' ' + (obj.levelRequirement === "strict" ? style.stick : '')}>
                    <InfoIcon className={style.gameStrictIcon} />
                    {obj.levelRequirement === "strict" ? "Строгий рівеннь" : "Будь-який рівень"}
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
                <span className={style.gameCourtName}>{obj.courtNumber}</span>
            </div>
        </address>

        <div className={style.gamePlayers}>
            <figure className={style.gameAvatarsGroup}>
                {
                    obj.players.map((player) => {
                        return <img className={style.gameAvatarImg} src={player.avatarUrl} alt={"Гравець " + player.nickname} />;
                    })
                }
                {obj.maxPlayers > obj.currentPlayers ? <button type="button" className={style.gameAddPlayerBtn} aria-label="Додати гравця"><ComeToGameIcon className={style.gameAddPlayerIcon} /></button> : ""}
            </figure>
            <span className={style.gamePlayersCount}>{obj.maxPlayers > obj.currentPlayers ? `${obj.currentPlayers} / ${obj.maxPlayers} гравців` : "Місьці немає"}</span>
        </div>

        <div className={style.gameFooter}>
            <div className={style.gamePriceGroup}>
                <span className={style.gamePriceLabel}>Ціна з гравця</span>
                <span className={style.gamePriceValue}>{obj.price} €</span>
            </div>
            <button type="button" className={style.gameJoinBtn}>{obj.isFull ? "Недоступно" : "Приєднатися"}</button>
        </div>
    </li>
};