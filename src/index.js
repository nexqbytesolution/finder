import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3000, () => {
  console.log(`Server  started on port ${PORT}`);
});
