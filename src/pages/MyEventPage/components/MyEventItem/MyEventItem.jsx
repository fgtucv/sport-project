import {
    DraftIcon,
    PadelIcon,
} from "../../../../components/Icons/Icons.jsx";

import style from "./MyEventItem.module.scss";

export const MyEventItem = ({obj}) => {
    if (obj.status === "Draft") {
        return <li className={style.game + ' ' + style.gameDraft}>
            <div className={style.gameCardHeader}>
                <h2 className={style.gameTitle}>{obj.title}</h2>
            </div>
            <div className={style.gameBody + ' ' + style.gameDraftBody}>
                <DraftIcon className={style.gameDraftIcon} />
                <a className={style.gameDraftText} href="">Редагувати чернетку</a>
            </div>
            <button type="button" className={style.gameDeleteButton}>
                Видалити чернетку
            </button>
        </li>
    } else {
        return <li className={`${style.game} ${style[`is${obj.status}`]}`}>
            <div className={style.gameCardHeader}>
                <div className={style.gameIconBackgraund}>
                    <PadelIcon className={style.gameTypeIcon} />
                </div>
                <h2 className={style.gameTitle}>{obj.title}</h2>
                <span className={style.gameResultbadge}>{obj.status}</span>
            </div>

            <div className={style.gameMeta}>
                <p className={style.gameLocation}>{obj.location}</p>
                <time dateTime="2026-10-20T10:00" className={style.gameDateTime}>
                    {obj.date}, {obj.time}
                </time>
            </div>

            {(obj.status === "Loss" || obj.status === "Win") && (
                <div className={style.gameBody}>
                    <div className={style.gamePlayersList}>
                        <div className={style.gameTeamPlayers}>
                            {obj.players
                                .filter((player) => player.team === "A")
                                .map((player) => (
                                    <img
                                        key={`team-a-${player.name}`}
                                        src={player.avatarUrl}
                                        alt={player.name}
                                        className={style.gamePlayerAvatar}
                                    />
                                ))}
                        </div>

                        <span className={style.gameScore}>
                            {`${obj.score[0].teamA}:${obj.score[0].teamB}, ${obj.score[1].teamA}:${obj.score[0].teamB}`}
                        </span>

                        <div className={style.gameTeamPlayers}>
                            {obj.players
                                .filter((player) => player.team === "B")
                                .map((player) => (
                                    <img
                                        key={`team-b-${player.name}`}
                                        src={player.avatarUrl}
                                        alt={player.name}
                                        className={style.gamePlayerAvatar}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {(obj.status === "Soon" || obj.status === "Draft") && (
                <div className={style.gameBody}>
                    <div className={style.gamePlayersList}>
                        {obj.players.map((player) => (
                            <img
                                key={`${player.team}-${player.name}`}
                                src={player.avatarUrl}
                                alt={player.name}
                                className={style.gamePlayerAvatar}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className={style.gameDebtStatus + ' ' + (obj.isPaid ? ' ' : style.debtNotPaid)}>
                <span className={style.gameDebtLabel}>{obj.isPaid ? `Борг перед ${obj.creatorUsername} сплачено:` : `Борг перед ${obj.creatorUsername} несплачено:`}</span>
                <span className={style.gameDebtAmount}> {obj.pricingAmount} €</span>
            </div>

            <button type="button" className={style.gameDeleteButton}>
                {obj.status === "Soon" ? "Покинути гру" : "Видалити гру"}
            </button>
        </li>
    }
};
