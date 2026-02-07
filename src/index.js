import express from "express";
import "dotenv/config";
import connectDB from "./config/ConnectDatabase.config.js";
import userRoutes from "./routes/user.route.js";

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const app = express();

connectDB(DB_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server  started on port ${PORT}`);
});
