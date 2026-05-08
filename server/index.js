const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoutes = require('./routes/blogs');
const categoryRoutes = require('./routes/categories');
const destinationRoutes = require('./routes/destinations');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check Mongo URI
if (!process.env.MONGO_URI) {
  console.log('MONGO_URI not found in .env file');
  process.exit(1);
}

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB Atlas Connected Successfully');
})
.catch((error) => {
  console.log('MongoDB Connection Error:', error.message);
});

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/admin', adminRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Travel Blog API Running Successfully');
});

// PORT
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});