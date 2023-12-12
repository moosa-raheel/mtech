import express from "express";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import { databaseConnection } from "./db/databaseConnection.js";
import { config } from "dotenv";

const app = express();

//Configure Morgan for logging
app.use(morgan("dev"));

//Configure environment variables
config();

//Database Connection
const uri = process.env.DB_URI;
databaseConnection(uri);

// Middlewares

app.use(express.json());

// Routes

app.use("/api/user", userRouter);

const port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
