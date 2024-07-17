const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Database Connections
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/userRegi");
        console.log('Database Connected Sucessfully.');
    } catch (error) {
        console.error('Error In Database Connectivity:', error.message);
    }
};

module.exports = connectDB;
