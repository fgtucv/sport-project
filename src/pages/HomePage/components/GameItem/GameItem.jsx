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

// "1" -> "Корт 1", "Корт 3" лишається як є
const formatCourt = (court) => {
    if (!court) return "";
    return /^\d+$/.test(String(court)) ? `Корт ${court}` : court;
};

// Поля відповідають таблиці games у Supabase (snake_case).
// obj.game_players: масив учасників, якщо запит робить join; obj.players_count: якщо читаєте з view games_with_counts.
export const GameItem = ({ obj, joinToGame, rating }) => {
    const sport = String(obj.sport ?? "").toLowerCase();
    const maxPlayers = Number(obj.max_players ?? 4);
    const playersCount = Array.isArray(obj.game_players)
        ? obj.game_players.length
        : Number(obj.players_count ?? 0);

    const levelMin = obj.level_min != null ? Number(obj.level_min) : null;
    const isStrict = Boolean(obj.strict_level);

    const isFull = playersCount >= maxPlayers;
    // rating = рівень користувача (поки null, тому обмеження за рівнем не спрацьовує)
    const isLevelTooLow = isStrict && rating != null && levelMin != null && Number(rating) < levelMin;
    const isUnavailable = isFull || isLevelTooLow;

    const price = `${Number(obj.price ?? 0).toFixed(2)} ${obj.currency ?? "€"}`;
    const location = [obj.location, formatCourt(obj.court)].filter(Boolean).join(", ");

    // useEffect(() => {
    //     async function loadPlayers() {
    //         try {
    //             const data = await getGamePlayers();


    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    // }, []);

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

            <GamePlayers gameId={obj.id} maxPlayers={maxPlayers}/>

            <div className={style.gameFooter}>
                {isLevelTooLow && <span className={style.gameStrictNote}>У цій грі строгий рівень</span>}
                <button
                    type="button"
                    className={style.gameJoinBtn}
                    disabled={isUnavailable}
                    // TODO: логіка приєднання. Поки joinToGame не передається, клік нічого не робить.
                    onClick={() => joinToGame?.(obj.id)}
                >
                    {isFull ? "Місць немає" : isLevelTooLow ? "Рівень занизький" : "Приєднатися"}
                </button>
            </div>
        </li>
    );
};
