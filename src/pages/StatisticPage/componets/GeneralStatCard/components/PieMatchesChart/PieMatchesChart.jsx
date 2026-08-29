import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import style from "./PieMatchesChart.module.scss";

const dataForPieChart = [
    { name: "Перемоги", value: 20, color: "#10B981" },
    { name: "Поразки", value: 10, color: "#EF4444" },
    { name: "Нічії", value: 4, color: "#D1D5DB" }
]

export const PieMatchesChart = () => {
    const totalMatches = dataForPieChart.reduce((sum, item) => sum + item.value, 0);
    const winPercentage = totalMatches ? Math.round(((dataForPieChart.find(item => item.name === "Перемоги")?.value || 0) / totalMatches) * 100) : 0;

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
            <span className={style.winRateInChart}>Win rate <span className={style.winRateAccenteInChart}>{`${winPercentage}%`}</span></span>
            <span className={style.matchesInChart}>{totalMatches}</span>
            <span className={style.descriptionInChart}>матчів</span>
        </div>
    </div>
};
