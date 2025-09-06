import React, { useState } from 'react';

const TaskEntry = ({ onSubmit }) => {
  const [form, setForm] = useState({
    ProjectID: '', Name: '', Description: '', AssignedTo: '', StartedDate: '', DubeDate: '', Status: 'Todo', Comments: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      <input name="ProjectID" placeholder="Project ID" value={form.ProjectID} onChange={handleChange} required />
      <input name="Name" placeholder="Name" value={form.Name} onChange={handleChange} required />
      <input name="Description" placeholder="Description" value={form.Description} onChange={handleChange} />
      <input name="AssignedTo" placeholder="Assigned To" value={form.AssignedTo} onChange={handleChange} />
      <input name="StartedDate" type="date" value={form.StartedDate} onChange={handleChange} />
      <input name="DubeDate" type="date" value={form.DubeDate} onChange={handleChange} />
      <select name="Status" value={form.Status} onChange={handleChange}>
        <option value="Todo">Todo</option>
        <option value="WIP">WIP</option>
        <option value="Completed">Completed</option>
        <option value="KIV">KIV</option>
      </select>
      <input name="Comments" placeholder="Comments" value={form.Comments} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskEntry;
