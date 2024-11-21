import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/Task.js";
import authRoutes from "./routes/Auth.js";
import authorRoutes from "./routes/Author.js";
import categoryRoutes from "./routes/Category.js"
import EventRoutes from "./routes/Event.js"
import * as middlewares from "./middlewares/Auth.js";

dotenv.config();
const app = express();
//db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected successfuly ");
  })
  .catch((e) => {
    console.log("connection failed", e);
  });

// middlewares
app.use(express.json());
app.use(cors());

//endpoints
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/author", authorRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/event",EventRoutes);S

export default app;
