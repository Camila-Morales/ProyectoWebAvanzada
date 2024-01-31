import mongoose from "mongoose";
import env from "dotenv";
env.config();

const database = process.env.MG_DB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(database);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
