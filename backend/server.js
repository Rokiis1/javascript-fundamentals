const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
import connectDB from './db.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS 
app.use(cors());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});