const express = require('express');
const { createTask, getTasks, updateTask, changeStatus, getMyTasks } = require('../controllers/taskController');
const { validate } = require('../middleware/validationMiddleware');
const { createTaskSchema, updateTaskSchema, updateTaskStatusSchema } = require('../validation/schemas');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', protect, validate(createTaskSchema), createTask);
router.get('/', protect, getTasks);
router.post('/:id', protect, validate(updateTaskSchema), updateTask);
router.post('/:id/status', protect, validate(updateTaskStatusSchema), changeStatus);
router.get('/my-tasks', protect,getMyTasks ); 
module.exports = router;
