import style from "./BottomCardItem.module.scss";

export const BottomCardItem = ({ type, data }) => {
    if (type === "time") {
        return (
            <li className={`${style.matchCard} ${data.type === "fastest" ? style.fastestMatch : style.longestMatch}`}>
                <span className={style.matchTag}>{data.type === "fastest" ? "Найшвидший матч" : "Найдовший матч"}</span>
                <div className={style.matchCentredDiv}>
                    <time className={style.matchTime}>{data.durationStr} <small>хв</small></time>
                    <strong className={style.matchScore}>{data.score}</strong>
                </div>
                <span className={style.matchPlayers}>{data.teamA.map((player) => (player + ' '))} vs {data.teamB.map((player) => (player + ' '))}</span>
                <span className={style.matcMeta}>{data.dateInfo}</span>
                <span className={style.matchBlanc}></span>
            </li>
        )
    } else if (type === "tournament") {
        return (
            <li className={style.tournamentCard}>
                <div className={style.tournamentHeader}>
                    <span className={style.tournamentName}>{data.type}</span>
                    <span className={style.tournamentBadge}>{data.winRatePercentage}%</span>
                </div>
                <ul className={style.tournamentMetrics}>
                    <li className={style.tournMetric}>
                        <span className={style.tournMetricLabel}>Тур</span>
                        <strong className={style.tournMetricValue}>{data.tournamentsCount}</strong>
                    </li>
                    <li className={style.tournMetric}>
                        <span className={style.tournMetricLabel}>Матч</span>
                        <strong className={style.tournMetricValue}>{data.matchesCount}</strong>
                    </li>
                    <li className={style.tournMetric}>
                        <span className={style.tournMetricLabel}>W-D-L</span>
                        <strong className={style.tournMetricValue}>{data.record.wins}-{data.record.draws}-{data.record.losses}</strong>
                    </li>
                </ul>
            </li>
        )
    }
}