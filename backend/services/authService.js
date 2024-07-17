const User = require('../models/User');

const register = async (newUser) => {
    try {
        return await newUser.save();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    register
};
