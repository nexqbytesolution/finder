import mongoose from "mongoose";

const connectDatabase = async (DB_URI) => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDatabase;
