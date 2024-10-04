
import express, { urlencoded } from "express";
import connectToDatabase from "./database/index.js";
const app=express();
connectToDatabase()
import userRoutes from "./routes/user.routes.js"
import doctorRoutes from "./routes/doctor.routes.js"
import appointmentRoutes from "./routes/appointment.routes.js"
import cors from "cors"

import cookieParser from "cookie-parser";


// middlewares 
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
// routers
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/doctors",doctorRoutes)
app.use("/api/v1/appointments",appointmentRoutes)




export default app