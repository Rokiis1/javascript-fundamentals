import express from 'express';
import { rateLimit } from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.mjs';

dotenv.config();

const app = express();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  keyGenerator: function(req) {
    return req.headers['x-forwarded-for'] || req.ip;
  }
});

// Log a custom format that includes the request method, URL, status code, and response time
app.use(morgan(':method :url :status :response-time ms'));

// It helps add security headers and prevent common security vulnerabilities such as cross-site scripting (XSS) and cross-site request forgery (CSRF).
app.use(helmet({
  xssFilter: true
}));

app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Enable CORS 
app.use(cors());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal server error');
});

// Start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});