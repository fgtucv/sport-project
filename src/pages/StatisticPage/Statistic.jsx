import { Container } from "../../components/Container/Container";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { ActivityBarChart } from "./componets/ActivityCard/components/ActivityBarChart/ActivityBarChart.jsx";
import { UserComparisonCard } from "./componets/UserComparisonCard/UserComparisonCard";
import { GeneralStatCard } from "./componets/GeneralStatCard/GeneralStatCard.jsx";
import { BottomCard } from "./componets/BottomCard/BottomCard.jsx";
import { ActivityCard } from "./componets/ActivityCard/ActivityCard.jsx";

import style from "./Statistic.module.scss";
import data from "../../data/user.json"

const text = { title: "Статистика", subtitle: "Преглядай свою статистику та покращу її" };

export const Statistic = () => {
    return (
        <section className={style.dashboard}>
            <Container>
                <MainTitle text={text} />

                <GeneralStatCard data={data.statistics.overall}/>

                <ActivityCard data={data.statistics.activityByMonth}/>

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
