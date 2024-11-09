import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskroutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.use("/api", taskRoutes);

app.listen(8000, () => {
  console.log("Server running");
});

export default app;
