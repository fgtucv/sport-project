import { FireIcon, GeneralStatIcon } from "../../components/Icons/Icons";

import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { PieMatchesChart } from "./componets/GeneralStatCard/components/PieMatchesChart/PieMatchesChart.jsx";
import { ActivityBarChart } from "./componets/ActivityBarChart/ActivityBarChart.jsx";
import { UserComparisonCard } from "./componets/UserComparisonCard/UserComparisonCard";
import { BottomCard } from "./componets/BottomCard/BottomCard.jsx";

import style from "./Statistic.module.scss";
import data from "../../data/user.json"

const text = { title: "Статистика", subtitle: "Преглядай свою статистику та покращу її" };

export const Statistic = () => {
    return (
        <section className={style.dashboard}>
            <Container>
                <MainTitle text={text} />

                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <h2 className={style.cardTitle}>Заголовок</h2>
                        <GeneralStatIcon className={style.cardIcon} />
                    </div>

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

                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <h2 className={style.cardTitle}>Ігрова активність</h2>
                        <div className={style.yearToggle}>
                            <button type="button" className={`${style.toggleBtn} ${style.active}`}>2026</button>
                            <button type="button" className={style.toggleBtn}>2025</button>
                        </div>
                    </div>

                    <ActivityBarChart />
                </div>

                <div className={style.rightColumn}>
                    <UserComparisonCard
                        title="Найважчі суперники"
                        users={data.statistics.topOpponents}
                        isPositive={false}
                    />
                    <UserComparisonCard
                        title="Найкращі партнери"
                        users={data.statistics.topPartners}
                        isPositive={true}
                    />
                </div>

                <BottomCard type="time" data={data.statistics.timeOnCourt}/>

                <BottomCard type="tournament" data={data.statistics.byTournamentType}/>

            </Container >
        </section>
    );
};
