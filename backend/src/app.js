import express from "express";
import authRoutes from "./Routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", //  frontend
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;
