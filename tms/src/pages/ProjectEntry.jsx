import React, { useState } from 'react';

const ProjectEntry = ({ onSubmit }) => {
  const [form, setForm] = useState({ Name: '', Description: '', Owner: '', PM: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Project</h2>
      <input name="Name" placeholder="Name" value={form.Name} onChange={handleChange} required />
      <input name="Description" placeholder="Description" value={form.Description} onChange={handleChange} />
      <input name="Owner" placeholder="Owner" value={form.Owner} onChange={handleChange} />
      <input name="PM" placeholder="Project Manager" value={form.PM} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProjectEntry;
