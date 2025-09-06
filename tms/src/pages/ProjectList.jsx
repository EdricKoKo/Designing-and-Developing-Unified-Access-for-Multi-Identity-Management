import React, { useState } from 'react';

const dummyProjects = [
  { ID: 1, Name: 'Website Redesign', Description: 'Update company website.', Owner: 'Alice', PM: 'Bob', Tasks: 12, Completed: 8 },
  { ID: 2, Name: 'Mobile App Launch', Description: 'Develop mobile app.', Owner: 'Charlie', PM: 'Dana', Tasks: 10, Completed: 10 },
  { ID: 3, Name: 'CRM Upgrade', Description: 'Upgrade CRM system.', Owner: 'Eve', PM: 'Frank', Tasks: 7, Completed: 3 },
  { ID: 4, Name: 'Cloud Migration', Description: 'Migrate servers to cloud.', Owner: 'Grace', PM: 'Heidi', Tasks: 15, Completed: 12 },
  { ID: 5, Name: 'Security Audit', Description: 'Conduct security audit.', Owner: 'Ivan', PM: 'Judy', Tasks: 6, Completed: 2 },
  { ID: 6, Name: 'Marketing Campaign', Description: 'Launch new campaign.', Owner: 'Mallory', PM: 'Niaj', Tasks: 9, Completed: 9 },
  { ID: 7, Name: 'Data Warehouse', Description: 'Build data warehouse.', Owner: 'Olivia', PM: 'Peggy', Tasks: 8, Completed: 4 },
  { ID: 8, Name: 'E-commerce Platform', Description: 'Develop e-commerce site.', Owner: 'Sybil', PM: 'Trent', Tasks: 11, Completed: 7 },
  { ID: 9, Name: 'HR Portal', Description: 'Create HR portal.', Owner: 'Victor', PM: 'Walter', Tasks: 5, Completed: 5 },
  { ID: 10, Name: 'Mobile Payments', Description: 'Integrate mobile payments.', Owner: 'Yvonne', PM: 'Zack', Tasks: 13, Completed: 10 },
  { ID: 11, Name: 'Analytics Dashboard', Description: 'Build analytics dashboard.', Owner: 'Amy', PM: 'Ben', Tasks: 4, Completed: 2 },
  { ID: 12, Name: 'Inventory System', Description: 'Upgrade inventory system.', Owner: 'Cathy', PM: 'Dan', Tasks: 6, Completed: 6 },
  { ID: 13, Name: 'Customer Support', Description: 'Implement support chat.', Owner: 'Ella', PM: 'Finn', Tasks: 7, Completed: 3 },
  { ID: 14, Name: 'SEO Optimization', Description: 'Optimize for search engines.', Owner: 'Gina', PM: 'Hank', Tasks: 8, Completed: 8 },
  { ID: 15, Name: 'Training Portal', Description: 'Develop training portal.', Owner: 'Iris', PM: 'Jack', Tasks: 5, Completed: 2 },
  { ID: 16, Name: 'Document Management', Description: 'Create doc management.', Owner: 'Karen', PM: 'Leo', Tasks: 9, Completed: 7 },
  { ID: 17, Name: 'Social Media Integration', Description: 'Integrate social media.', Owner: 'Mona', PM: 'Nate', Tasks: 6, Completed: 4 },
  { ID: 18, Name: 'Performance Review', Description: 'Automate reviews.', Owner: 'Oscar', PM: 'Paula', Tasks: 7, Completed: 7 },
  { ID: 19, Name: 'Bug Tracker', Description: 'Setup bug tracking.', Owner: 'Quinn', PM: 'Rita', Tasks: 10, Completed: 6 },
  { ID: 20, Name: 'Knowledge Base', Description: 'Build knowledge base.', Owner: 'Sam', PM: 'Tina', Tasks: 8, Completed: 5 }
];

const getStatusBadge = (project) => {
  const percent = (project.Completed / project.Tasks) * 100;
  if (percent === 100) return <span style={{color:'white',background:'#28a745',padding:'2px 8px',borderRadius:6}}>Completed</span>;
  if (percent >= 50) return <span style={{color:'white',background:'#ffc107',padding:'2px 8px',borderRadius:6}}>In Progress</span>;
  return <span style={{color:'white',background:'#dc3545',padding:'2px 8px',borderRadius:6}}>Behind</span>;
};

const ProjectCard = ({ project }) => (
  <div style={{border:'1px solid #ddd',borderRadius:8,padding:16,margin:8,minWidth:260,boxShadow:'0 2px 8px #eee',background:'#fff'}}>
    <h4 style={{marginBottom:8}}>{project.Name}</h4>
    <div style={{marginBottom:4}}><b>Description:</b> {project.Description}</div>
    <div style={{marginBottom:4}}><b>Owner:</b> {project.Owner}</div>
    <div style={{marginBottom:4}}><b>PM:</b> {project.PM}</div>
    <div style={{marginBottom:4}}><b>Tasks:</b> {project.Tasks}</div>
    <div style={{marginBottom:4}}><b>Completed:</b> {project.Completed}</div>
    <div style={{marginBottom:4}}><b>Status:</b> {getStatusBadge(project)}</div>
  </div>
);

const ProjectList = () => {
  const [search, setSearch] = useState('');
  const filtered = dummyProjects.filter(p => p.Name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{padding:'24px'}}>
      <h2>Projects</h2>
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{marginBottom:20,padding:8,borderRadius:4,border:'1px solid #ccc',width:'100%',maxWidth:400}}
      />
      <div style={{display:'flex',flexWrap:'wrap',gap:16,justifyContent:'flex-start'}}>
        {filtered.map(project => (
          <ProjectCard key={project.ID} project={project} />
        ))}
      </div>
      {filtered.length === 0 && <div style={{marginTop:32}}>No projects found.</div>}
    </div>
  );
};

export default ProjectList;
