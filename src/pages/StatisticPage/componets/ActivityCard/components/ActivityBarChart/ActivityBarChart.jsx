import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export const ActivityBarChart = ({data}) => {
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