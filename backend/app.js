
import express, { urlencoded } from "express";
import connectToDatabase from "./database/index.js";
const app=express();
connectToDatabase()
import userRoutes from "./routes/user.routes.js"
import doctorRoutes from "./routes/doctor.routes.js"
import hospitalsRoutes from "./routes/hospital.routes.js"
import cookieParser from "cookie-parser";


// middlewares 
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())

// routers
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/doctors",doctorRoutes)
app.use("/api/v1/hospitals",hospitalsRoutes)



export default app