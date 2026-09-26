import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import style from "./PieMatchesChart.module.scss";

export const PieMatchesChart = ({data}) => {
    const dataForPieChart = [
    { name: "Перемоги", value: data.wins, color: "#10B981" },
    { name: "Поразки", value: data.losses, color: "#EF4444" },
    { name: "Нічії", value: data.draws, color: "#D1D5DB" }
]
    return <div style={{ width: '100%', height: '250px', position: 'relative'}}>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={dataForPieChart}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="85%"
                    outerRadius="100%">
                    {dataForPieChart.map((stat) => (
                        <Cell key={stat.name} fill={stat.color} />
                    ))}
                </Pie>
                <Tooltip
                    cursor={{ fill: 'rgba(243, 244, 246, 0.6)' }}
                    contentStyle={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                        fontSize: '12px',
                        fontWeight: '600',
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
        <div className={style.textInChartDiv}>
            <span className={style.winRateInChart}>Win rate <span className={style.winRateAccenteInChart}>{`${data.winRatePercentage}%`}</span></span>
            <span className={style.matchesInChart}>{data.totalMatches}</span>
            <span className={style.descriptionInChart}>матчів</span>
        </div>
    </div>
};
