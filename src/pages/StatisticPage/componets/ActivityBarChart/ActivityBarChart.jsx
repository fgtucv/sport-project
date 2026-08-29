import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Січ', win: 8, draw: 3, loss: 2 },
  { month: 'Лют', win: 10, draw: 2, loss: 4 },
  { month: 'Бер', win: 6, draw: 4, loss: 5 },
  { month: 'Квіт', win: 12, draw: 1, loss: 3 },
  { month: 'Трав', win: 14, draw: 2, loss: 2 },
  { month: 'Чер', win: 11, draw: 5, loss: 1 },
  { month: 'Лип', win: 9, draw: 2, loss: 3 },
];

export const ActivityBarChart = () => {
  return (
    <div style={{ width: '100%', height: '469px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid  vertical={false} stroke="#2d34494d" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#45464D', fontSize: 12, fontWeight: 400, lineHeight: 18 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#86948A', fontSize: 10, fontWeight: 500, lineHeight: 15 }}
          />

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
          
          <Bar dataKey="win" name="Перемоги" stackId="a" fill="#10b981" />
          <Bar dataKey="draw" name="Нічиї" stackId="a" fill="#dde4dd" />
          <Bar dataKey="loss" name="Поразки" stackId="a" fill="rgba(239, 68, 68, 1)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};