import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.mjs';

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