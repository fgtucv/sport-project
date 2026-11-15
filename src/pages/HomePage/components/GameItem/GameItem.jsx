import { useSelector } from "react-redux";
import { LocationIcon } from "../../../../components/Icons/Icons";
// import { ComeToGameIcon, InfoIcon } from "../../../../components/Icons/Icons"; // TODO: знадобляться для кнопки "додати гравця"
import { GamePlayers } from "./components/GamePlayers/GamePlayers.jsx";
import style from "./GameItem.module.scss";

const SPORT_LABELS = {
    padel: "Падель",
    tennis: "Теніс",
    squash: "Сквош",
};

const formatTime = (iso) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "--:--";
    return date.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit", hour12: false });
};

const formatCourt = (court) => {
    if (!court) return "";
    return /^\d+$/.test(String(court)) ? `Корт ${court}` : court;
};

export const GameItem = ({ obj, joinToGame }) => {
    const playersCount = useSelector((s) => s.players.playersPerGames[obj.id]?.players?.length);
    const myLevel = useSelector((s) => s.auth.profile.level);
    const sport = obj.sport.toLowerCase();
    const maxPlayers = obj.max_players ?? 4;

    const levelMin = obj.level_min != null ? obj.level_min : null;
    const isStrict = obj.strict_level;

    const isFull = (playersCount || 4) >= maxPlayers;
    const isLevelTooLow = isStrict && myLevel != null && levelMin != null && myLevel < levelMin;
    const isUnavailable = isFull || isLevelTooLow;

    const price = `${obj.price.toFixed(2)} ${obj.currency ?? "€"}`;
    const location = [obj.location, formatCourt(obj.court)].join(", ");

    return (
        <li className={style.gameItem}>
            <div className={style.gameHeader}>
                <div className={style.gameBadges}>
                    <span className={`${style.gameBadge} ${style.gameBadgeSport}`}>
                        {SPORT_LABELS[sport] ?? obj.sport}
                    </span>
                    <span className={style.gameBadge}>
                        {levelMin != null ? `Level: ${levelMin.toFixed(1)}+` : "Будь-який рівень"}
                    </span>
                </div>
                <span className={style.gamePrice}>{price}</span>
            </div>

            <time className={style.gameTime} dateTime={obj.started_at}>
                {formatTime(obj.started_at)} • {obj.duration_time} хв
            </time>

            <address className={style.gameLocation}>
                <LocationIcon className={style.gameLocationIcon} />
                <span>{location}</span>
            </address>

            <GamePlayers gameId={obj.id} maxPlayers={maxPlayers} />

            <div className={style.gameFooter}>
                {isLevelTooLow && <span className={style.gameStrictNote}>У цій грі строгий рівень</span>}
                <button
                    type="button"
                    className={style.gameJoinBtn}
                    disabled={isUnavailable}
                    onClick={() => joinToGame?.(obj.id)}
                >
                    {isFull ? "Місць немає" : isLevelTooLow ? "Рівень занизький" : "Приєднатися"}
                </button>
            </div>
        </li>
    );
};
