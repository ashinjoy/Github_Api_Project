import express, { json, urlencoded } from "express";
import cors from 'cors'
import userRouter from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
const app = express();
app.use(urlencoded());
app.use(json());
app.use(cors())
app.use("/api/user",userRouter)
app.use(errorHandler)
export default app;
