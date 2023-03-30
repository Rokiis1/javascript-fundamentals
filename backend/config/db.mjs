// Import necessary modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define a function that connects to the MongoDB database
const connectDB = async () => {
    try {
      // Use Mongoose to connect to the MongoDB database with the URL specified in the MONGODB_URI environment variable
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      // If the connection is successful, log a message to the console
      console.log('MongoDB Connected!');
    } catch (err) {
      // If there is an error connecting to the database, log the error message and exit the Node.js process with an error code of 1
      console.error(err.message);
      process.exit(1);
    }
  };
  
  // Export the connectDB function as the default export of this module
  export default connectDB;