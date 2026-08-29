import { Component } from "react";
import { PieMatchesChart } from "./components/PieMatchesChart/PieMatchesChart.jsx";
import { StatHeader } from "../StatHeader/StatHeader.jsx";
import { GeneralStatIcon, FireIcon } from "../../../../components/Icons/Icons.jsx";

import style from "./GeneralStatCard.module.scss";

export class GeneralStatCard extends Component {
    render() {
        return (
            <div className={style.card}>
                <StatHeader titel={"Заголовок"} Icon={GeneralStatIcon}/>

                <PieMatchesChart />

                <ul className={style.statsLegend}>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${style.dot} ${style.winDot}`}></span>
                            <span className={style.legendLabel}>Перемоги</span>
                        </div>
                        <strong className={style.legendValue}>68</strong>
                    </li>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${style.dot} ${style.drawDot}`}></span>
                            <span className={style.legendLabel}>Нічії</span>
                        </div>
                        <strong className={style.legendValue}>32</strong>
                    </li>
                    <li className={style.legendItem}>
                        <div className={style.legendLabelDiv}>
                            <span className={`${style.dot} ${style.lossDot}`}></span>
                            <span className={style.legendLabel}>Поразки</span>
                        </div>
                        <strong className={style.legendValue}>26</strong>
                    </li>
                </ul>

                <div className={style.metricsGrid}>
                    <div className={style.metricCard}>
                        <span className={style.metricLabel}>Турніри</span>
                        <strong className={style.metricValue}>18</strong>
                    </div>
                    <div className={style.metricCard}>
                        <span className={style.metricLabel}>Гейм-W</span>
                        <strong className={style.metricValue}>460</strong>
                    </div>
                    <div className={style.metricCard}>
                        <span className={style.metricLabel}>Стрік</span>
                        <strong className={`${style.metricValue} ${style.metricValueStreak}`}>
                            9 <FireIcon className={style.fireIcon} />
                        </strong>
                    </div>
                    <div className={style.metricCard}>
                        <span className={style.metricLabel}>Досягненя</span>
                        <strong className={style.metricValue}>8</strong>
                    </div>
                </div>
            </div>
        )
    }
}