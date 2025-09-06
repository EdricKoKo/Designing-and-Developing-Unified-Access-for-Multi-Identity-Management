const express = require('express');
const router = express.Router();
const pool = require('../data/db');

// Create Task
router.post('/', async (req, res) => {
  const { ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Tasks (ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments]
    );
    res.status(201).json({ ID: result.insertId, ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List Tasks
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tasks');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Task by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tasks WHERE ID = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Task
router.put('/:id', async (req, res) => {
  const { ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments } = req.body;
  try {
    await pool.query(
      'UPDATE Tasks SET ProjectID=?, Name=?, Description=?, AssignedTo=?, StartedDate=?, DubeDate=?, Status=?, Comments=? WHERE ID=?',
      [ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments, req.params.id]
    );
    res.json({ ID: req.params.id, ProjectID, Name, Description, AssignedTo, StartedDate, DubeDate, Status, Comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Task
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM Tasks WHERE ID=?', [req.params.id]);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
