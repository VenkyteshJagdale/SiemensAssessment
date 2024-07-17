const { validationResult } = require('express-validator');
const User = require('../models/User');
const authService = require('../services/authService');
const Joi = require('joi');

// Joi schema validation
const registerSchema = Joi.object({
    name: Joi.string().required(),
    dob: Joi.date().iso().required(),
    address: Joi.string().required().pattern(/^[a-zA-Z0-9\s,'-]*$/)
});

const register = async (req, res) => {
    try {
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ 
                status: 400, 
                response: error.message
            });
        }

        const { name, dob, address } = req.body;

        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(409).json({ 
                status: 409, 
                response: "User already exists" 
            });
        }

        const newUser = new User({ name, dob, address });

        const savedUser = await authService.register(newUser);

        return res.status(201).json({ 
            status: 201, 
            response: { isAdded: true },
            data: savedUser 
        });
    } catch (error) {

        console.error('Error registering user:', error);
        return res.status(500).json({ 
            status: 500, 
            response: "Internal server error" 
        });
    }
};

module.exports = {
    register
};
