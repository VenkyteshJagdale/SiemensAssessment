const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    dob: { 
        type: Date, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('userRegistration', userSchema);
