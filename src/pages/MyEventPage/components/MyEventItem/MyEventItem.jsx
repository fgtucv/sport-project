import { DraftIcon, PadelIcon } from "../../../../components/Icons/Icons.jsx";

import style from "./MyEventItem.module.scss";

export const MyEventItem = ({ obj, deleteCard }) => {

    const formatedTitel = (type, sport) => {
        const firstPart = type === "tournamentEventsCard" ? "Турнір" : type === "gameEventsCard" ? "Гра" : "Кваліфікація";
        const secondPart = sport === "PADEL" ? "з паделу" : "з тенісу";
        
        return `${firstPart} ${secondPart}`;
    }


    if (obj.status === "Draft") {
        return (
            <li className={`${style.game} ${style.gameDraft}`} id={obj.id}>
                <div className={style.gameCardHeader}>
                    <h2 className={style.gameTitle}>{formatedTitel(obj.typeOfGame, obj.sportType)}</h2>
                </div>
                <div className={`${style.gameBody} ${style.gameDraftBody}`}>
                    <DraftIcon className={style.gameDraftIcon} />
                    <a className={style.gameDraftText} href="">Редагувати чернетку</a>
                </div>
                <button onClick={deleteCard} type="button" className={style.gameDeleteButton}>
                    Видалити чернетку
                </button>
            </li>
        )
    }


    return (
        <li className={`${style.game} ${style[`is${obj.status}`]}`} id={obj.id}>
            <div className={style.gameCardHeader}>
                <div className={style.gameIconBackgraund}>
                    <PadelIcon className={style.gameTypeIcon} />
                </div>
                <h2 className={style.gameTitle}>{formatedTitel(obj.typeOfGame, obj.sportType)}</h2>
                <span className={style.gameResultbadge}>{obj.status}</span>
            </div>

            <div className={style.gameMeta}>
                <p className={style.gameLocation}>{obj.clubName}</p>
                <time dateTime="2026-10-20T10:00" className={style.gameDateTime}>
                    {obj.date}, {obj.time}
                </time>
            </div>

            {/* {(obj.status === "Loss" || obj.status === "Win") && (
                <div className={style.gameBody}>
                    <div className={style.gamePlayersList}>
                        <div className={style.gameTeamPlayers}>
                            {obj.players
                                .filter((player) => player.team === "A")
                                .map((player) => (
                                    <img
                                        key={`${player.team}-${player.username}`}
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
                                        key={`${player.team}-${player.username}`}
                                        src={player.avatarUrl}
                                        alt={player.name}
                                        className={style.gamePlayerAvatar}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            )} */}

            {/* {(obj.status === "Soon" || obj.status === "Draw") && ( */}
                <div className={style.gameBody}>
                    {console.log(obj)}
                    <div className={style.gamePlayersList}>
                        {console.log(obj)}
                        {obj.players.map((player) =>{ 
                            console.log(player);
                            return <img
                                key={`${obj.id}-${player.nickname}`}
                                src={player.avatarUrl}
                                alt={player.nickname}
                                className={style.gamePlayerAvatar}
                            />
                        })}
                    </div>
                </div>
            {/* )} */}

            <div className={style.gameDebtStatus + ' ' + (obj.isPaid ? ' ' : style.debtNotPaid)}>
                <span className={style.gameDebtLabel}>{obj.isPaid ? `Борг перед ${obj.hostNickname} сплачено:` : `Борг перед ${obj.hostNickname} несплачено:`}</span>
                <span className={style.gameDebtAmount}> {obj.price / 4} €</span>
            </div>

            <button onClick={deleteCard} type="button" className={style.gameDeleteButton}>
                {obj.status === "Soon" ? "Покинути гру" : "Видалити гру"}
            </button>
        </li>
    )
};
