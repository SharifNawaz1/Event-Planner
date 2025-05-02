import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from 'dotenv';
import MessageRouter from "./router/messageRouter.js";
import cors from 'cors'



const app = express();

dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin:["https://event-planner-1-7zor.onrender.com/"],
    methods:["POST"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send("Hi Guyssssss");
});

app.use("/api/v1/message", MessageRouter)

dbConnection(); 

export default app;