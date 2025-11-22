import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const ALLOWED_ORIGIN = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();

const __dirname = path.resolve();

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on Port ${PORT}`);
  console.log(`CORS is allowing: ${ALLOWED_ORIGIN}`);
});
