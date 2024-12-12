import mongoose from "mongoose";
import { config } from "../config/app.config";

const connectDatabase = async (retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(config.MONGO_URI);
      console.log("Connected to MongoDB");
      return;
    } catch (error) {
      console.error(
        `Database connection failed. Retrying in ${delay}ms...`,
        error
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error("Could not connect to MongoDB. Exiting.");
  process.exit(1);
};

export default connectDatabase;
