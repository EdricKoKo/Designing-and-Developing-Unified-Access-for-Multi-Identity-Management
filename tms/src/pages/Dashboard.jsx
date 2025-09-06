import React from 'react';

// Dummy summary data for dashboard
const summary = {
  totalProjects: 20,
  completedProjects: 12,
  inProgressProjects: 6,
  notStartedProjects: 2,
  totalTasks: 60,
  completedTasks: 30,
  inProgressTasks: 20,
  todoTasks: 8,
  kivTasks: 2,
};

const statCard = (label, value, color) => (
  <div style={{flex:1,minWidth:180,margin:8,padding:20,borderRadius:10,background:color,color:'#fff',boxShadow:'0 2px 8px #eee',textAlign:'center'}}>
    <div style={{fontSize:22,fontWeight:'bold'}}>{value}</div>
    <div style={{fontSize:16,marginTop:8}}>{label}</div>
  </div>
);

const chartData = [
  { label: 'Completed', value: summary.completedTasks, color: '#28a745' },
  { label: 'In Progress', value: summary.inProgressTasks, color: '#ffc107' },
  { label: 'Todo', value: summary.todoTasks, color: '#6c757d' },
  { label: 'KIV', value: summary.kivTasks, color: '#17a2b8' },
];

const maxValue = Math.max(...chartData.map(d => d.value));

const BarChart = () => (
  <svg width={480} height={320} style={{background:'#fff',borderRadius:8,boxShadow:'0 2px 8px #eee',margin:'24px 0'}}>
    {chartData.map((d, i) => (
      <g key={d.label}>
        <rect
          x={80 + i * 80}
          y={260 - (d.value / maxValue) * 200}
          width={60}
          height={(d.value / maxValue) * 200}
          fill={d.color}
        />
        <text x={110 + i * 80} y={285} textAnchor="middle" fontSize={16}>{d.label}</text>
        <text x={110 + i * 80} y={245 - (d.value / maxValue) * 200} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#333">{d.value}</text>
      </g>
    ))}
    <text x={240} y={40} textAnchor="middle" fontSize={20} fontWeight="bold">Task Status Overview</text>
  </svg>
);

const pieData = [
  { label: 'Completed', value: summary.completedProjects, color: '#28a745' },
  { label: 'In Progress', value: summary.inProgressProjects, color: '#ffc107' },
  { label: 'Not Started', value: summary.notStartedProjects, color: '#6c757d' },
];
const totalPie = pieData.reduce((sum, d) => sum + d.value, 0);

const PieChart = () => {
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
      <text x={cx} y={cy} textAnchor="middle" fontSize={20} fontWeight="bold" fill="#333">Projects</text>
    </svg>
  );
};

const Dashboard = () => (
  <div style={{padding:'32px'}}>
    <h2>Dashboard</h2>
    <div style={{display:'flex',flexWrap:'wrap',gap:16,marginBottom:32}}>
      {statCard('Total Projects', summary.totalProjects, '#007bff')}
      {statCard('Total Tasks', summary.totalTasks, '#17a2b8')}
      {statCard('Completed Tasks', summary.completedTasks, '#28a745')}
      {statCard('In Progress', summary.inProgressTasks, '#ffc107')}
      {statCard('Todo', summary.todoTasks, '#6c757d')}
      {statCard('KIV', summary.kivTasks, '#17a2b8')}
    </div>
    <div style={{display:'flex',flexWrap:'wrap',gap:32,alignItems:'flex-start'}}>
      <BarChart />
      <PieChart />
    </div>
    <div style={{marginTop:32}}>
      <h4>Welcome to the Task Management App!</h4>
      <p>This dashboard gives you a quick overview of your projects and tasks. Use the navigation bar to view details, filter, and manage your work efficiently.</p>
    </div>
  </div>
);

export default Dashboard;
