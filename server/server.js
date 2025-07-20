import express from "express";
import cors from "cors";

import authRoute from "./routes/authRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Define Routes
app.use("/api/auth", authRoute);
app.use("/api/articles", articleRoutes);
// Basic route for testing server
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
