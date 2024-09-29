
import express from "express";
import connectToDatabase from "./database/index.js";
const app=express();
connectToDatabase()
import userRoutes from "./routes/user.routes.js"


// routers
app.use("/api/v1/users",userRoutes)



export default app