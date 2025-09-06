const express = require('express');
const todolist = require('../controllers/todolist');
const projects = require('../controllers/projects');
const tasks = require('../controllers/tasks');

// initialize router
const router = express.Router();

router.use('/projects', projects);
router.use('/tasks', tasks);

router.get('/todolist', todolist.getTodos);

router.get('/todolist/:id', todolist.getTodo);

router.post('/todolist', todolist.postTodo);

router.put('/todolist/:id', todolist.updateTodo);

router.delete('/todolist/:id', todolist.deleteTodo);

module.exports = router;




