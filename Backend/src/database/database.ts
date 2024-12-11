import mongoose from "mongoose";
import { config } from "../config/app.config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to mongoose database");
  } catch (error) {
    console.log("Error connecting to mongoose database");
    process.exit(1);
  }
};

export default connectDatabase;
