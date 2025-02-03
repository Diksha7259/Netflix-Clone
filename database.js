import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const databaseConnection = () => {
    mongoose
        .connect(process.env.Mongo_Uri)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error.message);
        });
};

export default databaseConnection;
