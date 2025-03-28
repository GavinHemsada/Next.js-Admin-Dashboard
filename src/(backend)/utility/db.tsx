"use server";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Nextdb";

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in the .env file!");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectToDatabase;