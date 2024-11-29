const Joi = require('joi');

exports.registerUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword:Joi.string().required().valid(Joi.ref("password")),
  role: Joi.string().valid('admin', 'user').optional(),
});

exports.loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.createTaskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().required(),
  dueDate: Joi.date().required(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
  assignedTo: Joi.string().required(),
});

exports.updateTaskSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  description: Joi.string().optional(),
  dueDate: Joi.date().optional(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
});

exports.updateTaskStatusSchema = Joi.object({
  status: Joi.string().valid('pending', 'completed').required(),
});
