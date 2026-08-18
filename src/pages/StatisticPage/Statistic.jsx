import {
    FireIcon,
    GeneralStatIcon,
    TimeStatIcon,
    TournamentStatIcon,
} from "../../components/Icons/Icons";

import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { PieMatchesChart } from "./componets/PieMatchesChart/PieMatchesChart.jsx";
import { ActivityBarChart } from "./componets/ActivityBarChart/ActivityBarChart.jsx";
import { UserComparisonCard } from "./componets/UserComparisonCard/UserComparisonCard";

import style from "./Statistic.module.scss";

const text = { title: "Статистика", subtitle: "Преглядай свою статистику та покращу її" };

const challengingOpponents = [
    { name: "Mario Garcia", alt: "@al_l_91", summary: "0/2 матчів виграно", dots: ["loss", "loss"], trend: "-50%" },
    { name: "Андрій", alt: "@al_l_91", summary: "2/8 матчів виграно", dots: ["win", "win", "loss", "loss", "loss"], trend: "-25%" },
    { name: "@al_l_91", alt: "@al_l_91", summary: "5/16 матчів виграно", dots: ["win", "win", "draw", "loss", "loss"], trend: "-19%" },
];

const bestPartners = [
    { name: "@ye_alex", alt: "@ye_alex", summary: "3/3 матчів виграно", dots: ["win", "win", "win"], trend: "+100%" },
    { name: "@krapochka_case", alt: "@krapochka_case", summary: "3/3 матчів виграно", dots: ["win", "win", "win"], trend: "+100%" },
    { name: "Mario Garcia", alt: "@al_l_91", summary: "1/1 матчів виграно", dots: ["win"], trend: "+100%" },
];

export const Statistic = () => {
    return (
        <Container>
            <MainTitle text={text} />

            <section className={style.dashboard}>

                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <h2 className={style.cardTitle}>Заголовок</h2>
                        <GeneralStatIcon className={style.statIcon} />
                    </div>

                    <div className={style.pieChartDiv}>
                        <PieMatchesChart />
                    </div>

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

                    <div className={style.lineChartPlaceholder}>
                        <ActivityBarChart />
                    </div>
                </div>

                <div className={style.rightColumn}>
                    <UserComparisonCard
                        title="Найважчі суперники"
                        users={challengingOpponents}
                        isPositive={false}
                    />
                    <UserComparisonCard
                        title="Найкращі партнери"
                        users={bestPartners}
                        isPositive
                    />
                </div>

                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <h2 className={style.cardTitle}>Час на корті</h2>
                        <TimeStatIcon className={style.timeIcon} />
                    </div>

                    <div className={style.matchCardsList}>
                        <div className={`${style.matchCard} ${style.fastestMatch}`}>
                            <span className={style.matchTag}>Найшвидший матч</span>
                            <div className={style.matchCentredDiv}>
                                <time className={style.matchTime}>11:03 <small>хв</small></time>
                                <strong className={style.matchScore}>5:1</strong>
                            </div>
                            <span className={style.matchMeta}>@khmta @bosla_097 • May 02 • Primera</span>
                            <span className={style.matchBlanc}></span>
                        </div>

                        <div className={`${style.matchCard} ${style.longestMatch}`}>
                            <span className={style.matchTag}>Найдовший матч</span>
                            <div className={style.matchCentredDiv}>
                                <time className={style.matchTime}>19:52 <small>хв</small></time>
                                <strong className={style.matchScore}>3:3</strong>
                            </div>
                            <span className={style.matchMeta}>@bosla_097 @Marcos_Medel • May 02 • Primera</span>
                            <span className={style.matchBlanc}></span>
                        </div>
                    </div>

                    <div className={style.averageTimeBlock}>
                        <span className={style.averageLabel}>Середній час</span>
                        <time className={style.averageTime}>14:57 <small>хв</small></time>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.cardHeader}>
                        <h2 className={style.cardTitle}>Турнір</h2>
                        <TournamentStatIcon className={style.tournamentIcon} />
                    </div>

                    <div className={style.tournamentList}>
                        <div className={style.tournamentCard}>
                            <div className={style.tournamentHeader}>
                                <span className={style.tournamentName}>Primera</span>
                                <span className={style.tournamentBadge}>52%</span>
                            </div>
                            <div className={style.tournamentMetrics}>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>Тур</span>
                                    <strong className={style.tournMetricValue}>15</strong>
                                </div>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>Матч</span>
                                    <strong className={style.tournMetricValue}>105</strong>
                                </div>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>W-D-L</span>
                                    <strong className={style.tournMetricValue}>55–23–27</strong>
                                </div>
                            </div>
                        </div>

                        <div className={style.tournamentCard}>
                            <div className={style.tournamentHeader}>
                                <span className={style.tournamentName}>Masculino</span>
                                <span className={style.tournamentBadge}>62%</span>
                            </div>
                            <div className={style.tournamentMetrics}>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>Тур</span>
                                    <strong className={style.tournMetricValue}>3</strong>
                                </div>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>Матч</span>
                                    <strong className={style.tournMetricValue}>21</strong>
                                </div>
                                <div className={style.tournMetric}>
                                    <span className={style.tournMetricLabel}>W-D-L</span>
                                    <strong className={style.tournMetricValue}>13–3–5</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Container >
    );
};
