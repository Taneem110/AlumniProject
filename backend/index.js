const dotenv = require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");

// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
 // Import db.js

// Import Routes
// const userRoutes = require('./routes/userRoutes');
// const alumniRoutes = require('./routes/alumniRoutes');
// const eventRoutes = require('./routes/eventRoutes');
// const jobRoutes = require('./routes/jobRoutes');
// const donationRoutes = require('./routes/donationRoutes');
// const mentorshipRoutes = require('./routes/mentorshipRoutes');
// const feedbackRoutes = require('./routes/feedbackRoutes');
// const messageRoutes = require('./routes/messageRoutes');

// Create Express App
const app = express();

// Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(bodyParser.json()); // Parse incoming JSON data
// app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Static Folder for Uploaded Files
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
connectDB();

// Define Routes
app.use('/api/auth', authRoutes);
// app.use('/api/alumni', alumniRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/jobs', jobRoutes);
// app.use('/api/donations', donationRoutes);
// app.use('/api/mentorships', mentorshipRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/messages', messageRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Alumni Management System API!' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'An internal server error occurred!',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error',
    });
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
