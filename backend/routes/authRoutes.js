const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');

// Registration route
router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('dob').notEmpty().withMessage('Date of Birth is required').isISO8601(),
    body('address').notEmpty().withMessage('Address is required').matches(/^[a-zA-Z0-9\s,'-]*$/)
], authController.register);

module.exports = router;
