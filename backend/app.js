
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();
const PORT = process.env.PORT || 7000;
const cors = require('cors'); 

// Cors
app.use(cors());

// Handling Json Data
app.use(bodyParser.json());

// MongoDB Connection
connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Global Error Handler
app.use(errorHandler);

// Server Started.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
