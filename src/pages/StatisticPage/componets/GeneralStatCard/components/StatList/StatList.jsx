import { FireIcon } from "../../../../../../components/Icons/Icons";

import style from "./StatList.module.scss"

export const StatList = ({data}) => {
    return (
        <ul className={style.metricsGrid}>
            <li className={style.metricCard}>
                <span className={style.metricLabel}>Турніри</span>
                <strong className={style.metricValue}>{data.tournamentsPlayed}</strong>
            </li>
            <li className={style.metricCard}>
                <span className={style.metricLabel}>Гейм-W</span>
                <strong className={style.metricValue}>{data.gamesWon}</strong>
            </li>
            <li className={style.metricCard}>
                <span className={style.metricLabel}>Стрік</span>
                <strong className={`${style.metricValue} ${style.metricValueStreak}`}>
                    {data.winStreak} <FireIcon className={style.fireIcon} />
                </strong>
            </li>
            <li className={style.metricCard}>
                <span className={style.metricLabel}>Досягненя</span>
                <strong className={style.metricValue}>{data.achievementsUnlocked}</strong>
            </li>
        </ul>
    )
}