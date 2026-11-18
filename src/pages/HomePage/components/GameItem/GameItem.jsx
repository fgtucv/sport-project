import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast } from "sonner";
import { MapPin } from "lucide-react";

import { joinToGameService } from "../../../../api/services/gamesServices.js";

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

export const GameItem = ({ obj }) => {
    const navigate = useNavigate();

    const playersCount = useSelector((s) => s.players.playersPerGames[obj.id]?.players?.length);
    const myLevel = useSelector((s) => s.auth.profile?.level);
    const session = useSelector((s) => s.auth.session);

    const isAuth = !!session;

    const sport = obj.sport.toLowerCase();
    const maxPlayers = obj.max_players ?? 4;

    const levelMin = obj.level_min != null ? obj.level_min : null;
    const isStrict = obj.strict_level;

    const isFull = (playersCount || 4) >= maxPlayers;
    const isLevelTooLow = isStrict && myLevel != null && levelMin != null && myLevel < levelMin;
    const isUnavailable = isFull || isLevelTooLow;

    const price = `${obj.price.toFixed(2)} ${obj.currency ?? "€"}`;
    const location = [obj.location, formatCourt(obj.court)].join(", ");

    const loadingJoin = async (playerId, gameId) => {
        try {
            const result = await joinToGameService(playerId, gameId)

            if (result && result.success) {
                toast.success("Ви успішно доєдналися")
            }

        } catch (error) {
            if (error.code === '23505') {
                toast.error("Помилка", { description: "Ви вже доєднані до гри" })
                return
            }

            toast.error("Помилка не вдалось приєднатись")
        }
    };

    const joinHandlate = (gameId) => {
        if (!isAuth) {
            toast.warning("Ви не авторизовані")
            navigate("/login")
            return
        }

        loadingJoin(session.user.id, gameId)
    };

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
                <MapPin size={16} color="currentColor" />
                <span>{location}</span>
            </address>

            <GamePlayers gameId={obj.id} maxPlayers={maxPlayers} />

            <div className={style.gameFooter}>
                {isLevelTooLow && <span className={style.gameStrictNote}>У цій грі строгий рівень</span>}
                <button
                    type="button"
                    className={style.gameJoinBtn}
                    disabled={isUnavailable}
                    onClick={!isUnavailable ? () => { joinHandlate(obj.id) } : undefined}
                >
                    {isFull ? "Місць немає" : isLevelTooLow ? "Рівень занизький" : "Приєднатися"}
                </button>
            </div>
        </li>
    );
};