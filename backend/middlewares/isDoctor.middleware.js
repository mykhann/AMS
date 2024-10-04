import jwt from "jsonwebtoken";
import { Doctor } from "../models/doctor.model.js";

const isDoctor=async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(404).json({
                message: "Please login first",
                success: false
            })
        }
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const doctorId = decodedToken.doctorId
        const doctor = await Doctor.findById(doctorId)
        if (!doctor) {
            return res.status(403).json({
                message: 'Doctor not found',
                success: false
            })

        }
        req.user = doctor;
        next();
    } catch (error) {
        console.log(error)

    }
}

export {isDoctor}