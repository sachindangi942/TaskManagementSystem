const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority, assignedTo } = req.body;
  const task = await Task.create({ title, description, dueDate, priority, assignedTo });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
    console.log("request id",req)
  const tasks = await Task.find({ assignedTo: req.user._id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.changeStatus = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.status = req.body.status;
  await task.save();
  res.json(task);
};


//+++++++====================================
// controllers/taskController.js

// Get tasks assigned to the logged-in user
exports.getMyTasks = async (req, res) => {
  try {
    // Get tasks that are assigned to the logged-in user (req.user._id)
    const tasks = await Task.find({ assignedTo: req.user._id });

    if (!tasks.length) {
      return res.status(404).json({ message: 'No tasks found for this user' });
    }

    // Return the list of tasks
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};
