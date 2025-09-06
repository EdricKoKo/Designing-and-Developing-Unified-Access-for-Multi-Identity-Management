const express = require('express');
const router = express.Router();
const pool = require('../data/db');

// Create Project
router.post('/', async (req, res) => {
  const { Name, Description, Owner, PM } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO Projects (Name, Description, Owner, PM) VALUES (?, ?, ?, ?)', [Name, Description, Owner, PM]);
    res.status(201).json({ ID: result.insertId, Name, Description, Owner, PM });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List Projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Projects');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Project by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Projects WHERE ID = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Project
router.put('/:id', async (req, res) => {
  const { Name, Description, Owner, PM } = req.body;
  try {
    await pool.query('UPDATE Projects SET Name=?, Description=?, Owner=?, PM=? WHERE ID=?', [Name, Description, Owner, PM, req.params.id]);
    res.json({ ID: req.params.id, Name, Description, Owner, PM });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Project
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM Projects WHERE ID=?', [req.params.id]);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
