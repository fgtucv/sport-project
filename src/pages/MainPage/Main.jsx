import { Container } from "../../components/Container/Container"
import { Category } from "../../components/Category/Category";
import { Sorted } from "../../components/Sorted/Sorted";
import { LocationIcon } from "../../components/Icons/Icons";
import { InfoIcon } from "../../components/Icons/Icons";
import { ComeToGameIcon } from "../../components/Icons/Icons";
import daysData from "../../data/days.json";
import gamesData from "../../data/AllGames.json"
import style from "./Main.module.scss";

export const Main = () => {
    return <main className={style.main}>
        <Container>
            <div className={style.mainHeader}>
                <h1 className={style.mainTitle}>Доступні ігри</h1>
                <p className={style.mainSubtitle}>Доєднуйтесь до ігор створених іншими гравцями</p>
            </div>
            <ul className={style.mainDates}>
                {
                    daysData.map((day) => (
                        <li className={style.mainDateItem + (day.isSelected ? ' ' + style.activeDay : '')} key={day.id}>
                            <h3 className={style.mainDate}>{day.dayOfWeek}<br /><span className={style.mainDateDay}>{day.dayNumber}</span><br />{day.monthLabel}</h3>
                        </li>
                    ))
                }
            </ul>
            <div className={style.mainFilter}>
                <Category />
                <Sorted />
            </div>
            <ul className={style.games}>
                {
                    gamesData.map((obj) => {
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
                                            return <img className={style.gameAvatarImg} src={player.avatarUrl} alt={"Гравець " + player.nickname}/>;
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
                    })
                }
            </ul>
        </Container>
    </main>
}