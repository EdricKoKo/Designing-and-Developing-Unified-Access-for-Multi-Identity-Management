import React, { useState } from 'react';

const dummyTasks = Array.from({ length: 60 }, (_, i) => ({
  ID: i + 1,
  ProjectID: (i % 20) + 1,
  Name: `Task ${i + 1}`,
  Description: `Description for task ${i + 1}`,
  AssignedTo: `User${(i % 10) + 1}`,
  StartedDate: `2025-08-${(i % 28) + 1}`,
  DubeDate: `2025-09-${(i % 28) + 1}`,
  Status: ['Todo', 'WIP', 'Completed', 'KIV'][i % 4],
  Comments: `Comment for task ${i + 1}`
}));

const getStatusBadge = (status) => {
  const colorMap = {
    'Todo': '#6c757d',
    'WIP': '#ffc107',
    'Completed': '#28a745',
    'KIV': '#17a2b8'
  };
  return <span style={{color:'white',background:colorMap[status],padding:'2px 8px',borderRadius:6}}>{status}</span>;
};

const TaskCard = ({ task }) => (
  <div style={{border:'1px solid #ddd',borderRadius:8,padding:16,margin:8,minWidth:260,boxShadow:'0 2px 8px #eee',background:'#fff'}}>
    <h4 style={{marginBottom:8}}>{task.Name}</h4>
    <div style={{marginBottom:4}}><b>Description:</b> {task.Description}</div>
    <div style={{marginBottom:4}}><b>Assigned To:</b> {task.AssignedTo}</div>
    <div style={{marginBottom:4}}><b>Project ID:</b> {task.ProjectID}</div>
    <div style={{marginBottom:4}}><b>Started Date:</b> {task.StartedDate}</div>
    <div style={{marginBottom:4}}><b>Due Date:</b> {task.DubeDate}</div>
    <div style={{marginBottom:4}}><b>Status:</b> {getStatusBadge(task.Status)}</div>
    <div style={{marginBottom:4}}><b>Comments:</b> {task.Comments}</div>
  </div>
);

const TaskList = () => {
  const [search, setSearch] = useState('');
  const filtered = dummyTasks.filter(t => t.Name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{padding:'24px'}}>
      <h2>Tasks</h2>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{marginBottom:20,padding:8,borderRadius:4,border:'1px solid #ccc',width:'100%',maxWidth:400}}
      />
      <div style={{display:'flex',flexWrap:'wrap',gap:16,justifyContent:'flex-start'}}>
        {filtered.map(task => (
          <TaskCard key={task.ID} task={task} />
        ))}
      </div>
      {filtered.length === 0 && <div style={{marginTop:32}}>No tasks found.</div>}
    </div>
  );
};

export default TaskList;
