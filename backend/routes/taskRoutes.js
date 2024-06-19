const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/tasks', authMiddleware.authenticateUser, taskController.createTask);
router.get('/tasks', authMiddleware.authenticateUser, taskController.getAllTasks);
router.get('/tasks/:id', authMiddleware.authenticateUser, taskController.getTaskById);
router.put('/tasks/:id', authMiddleware.authenticateUser, taskController.updateTask);
router.delete('/tasks/:id', authMiddleware.authenticateUser, taskController.deleteTask);

module.exports = router;
