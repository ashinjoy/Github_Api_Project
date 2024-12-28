import express, { json, urlencoded } from "express";
import cors from 'cors'
const app = express();
app.use(urlencoded());
app.use(json());
app.use(cors())
app.use("/api/users")

export default app;
