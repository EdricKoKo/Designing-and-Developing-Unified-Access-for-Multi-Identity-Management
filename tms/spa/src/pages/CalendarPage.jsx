import React from 'react';

// Dummy calendar data for demo
const calendarData = [
  { type: 'Task', name: 'Task 1', date: '2025-09-01', color: '#28a745' },
  { type: 'Task', name: 'Task 2', date: '2025-09-03', color: '#ffc107' },
  { type: 'Project', name: 'Website Redesign', date: '2025-09-05', color: '#007bff' },
  { type: 'Task', name: 'Task 3', date: '2025-09-10', color: '#17a2b8' },
  { type: 'Project', name: 'Mobile App Launch', date: '2025-09-12', color: '#6c757d' },
  { type: 'Task', name: 'Task 4', date: '2025-09-15', color: '#dc3545' },
];

const daysInMonth = 30;
const month = 'September';
const year = 2025;

const CalendarPage = () => (
  <div style={{padding:'32px'}}>
    <h2>Calendar</h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(7, 1fr)',gap:8,marginTop:24}}>
      {[...Array(daysInMonth)].map((_, i) => {
        const day = i + 1;
        const dateStr = `2025-09-${day.toString().padStart(2,'0')}`;
        const items = calendarData.filter(item => item.date === dateStr);
        return (
          <div key={day} style={{border:'1px solid #eee',borderRadius:8,minHeight:80,padding:8,background:'#fff'}}>
            <div style={{fontWeight:'bold',marginBottom:4}}>{day}</div>
            {items.map((item, idx) => (
              <div key={idx} style={{background:item.color,color:'#fff',borderRadius:4,padding:'2px 6px',marginBottom:2,fontSize:13}}>
                {item.type}: {item.name}
              </div>
            ))}
          </div>
        );
      })}
    </div>
    <div style={{marginTop:32}}>
      <b>{month} {year}</b>
    </div>
  </div>
);

export default CalendarPage;
