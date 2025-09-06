import React from 'react';

// Dummy data for analysis charts
const analysisData = [
  { label: 'Jan', value: 12 },
  { label: 'Feb', value: 18 },
  { label: 'Mar', value: 22 },
  { label: 'Apr', value: 15 },
  { label: 'May', value: 25 },
  { label: 'Jun', value: 20 },
];

const BarChart = () => {
  const maxValue = Math.max(...analysisData.map(d => d.value));
  return (
    <svg width={480} height={320} style={{background:'#fff',borderRadius:8,boxShadow:'0 2px 8px #eee',margin:'24px 0'}}>
      {analysisData.map((d, i) => (
        <g key={d.label}>
          <rect
            x={60 + i * 60}
            y={260 - (d.value / maxValue) * 200}
            width={40}
            height={(d.value / maxValue) * 200}
            fill="#007bff"
          />
          <text x={80 + i * 60} y={285} textAnchor="middle" fontSize={16}>{d.label}</text>
          <text x={80 + i * 60} y={245 - (d.value / maxValue) * 200} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#333">{d.value}</text>
        </g>
      ))}
      <text x={240} y={40} textAnchor="middle" fontSize={20} fontWeight="bold">Monthly Analysis</text>
    </svg>
  );
};

const PieChart = () => {
  const pieData = [
    { label: 'Completed', value: 30, color: '#28a745' },
    { label: 'In Progress', value: 20, color: '#ffc107' },
    { label: 'Todo', value: 8, color: '#6c757d' },
    { label: 'KIV', value: 2, color: '#17a2b8' },
  ];
  const totalPie = pieData.reduce((sum, d) => sum + d.value, 0);
  let startAngle = 0;
  const radius = 100;
  const cx = 240, cy = 160;
  return (
    <svg width={480} height={320} style={{background:'#fff',borderRadius:8,boxShadow:'0 2px 8px #eee',margin:'24px 0'}}>
      {pieData.map((d, i) => {
        const angle = (d.value / totalPie) * 2 * Math.PI;
        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(startAngle + angle);
        const y2 = cy + radius * Math.sin(startAngle + angle);
        const largeArc = angle > Math.PI ? 1 : 0;
        const pathData = `M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
        const midAngle = startAngle + angle / 2;
        const labelX = cx + (radius + 40) * Math.cos(midAngle);
        const labelY = cy + (radius + 40) * Math.sin(midAngle);
        const percent = ((d.value / totalPie) * 100).toFixed(0);
        startAngle += angle;
        return (
          <g key={d.label}>
            <path d={pathData} fill={d.color} stroke="#fff" strokeWidth={2} />
            <text x={labelX} y={labelY} textAnchor="middle" fontSize={16} fill="#333">{d.label} ({percent}%)</text>
          </g>
        );
      })}
      <text x={cx} y={cy} textAnchor="middle" fontSize={20} fontWeight="bold" fill="#333">Status Distribution</text>
    </svg>
  );
};

const Analysis = () => (
  <div style={{padding:'32px'}}>
    <h2>Analysis</h2>
    <BarChart />
    <PieChart />
  </div>
);

export default Analysis;
