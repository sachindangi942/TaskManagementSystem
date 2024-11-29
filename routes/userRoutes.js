const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { validate } = require('../middleware/validationMiddleware');
const { registerUserSchema, loginUserSchema } = require('../validation/schemas');

const router = express.Router();
router.post('/register', validate(registerUserSchema), registerUser);
router.post('/login', validate(loginUserSchema), loginUser);

module.exports = router;
