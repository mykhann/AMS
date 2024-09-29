import { Appointment } from "../models/appointment.model.js";
import { Doctor } from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler,js";

const registerAppointment = asyncHandler(async(req,res)=>{
    const {date,time,doctorId}=req.body;
    const userId=req.user._id;
    if (!doctorId || !time || !date){
        return res.status(404).json({
            success: false,
            message:"please enter all fields"
        });
    };
    const doctor=await Doctor.findById(doctorId);
    if (!doctor){
        return res.status(404).json({success: false, message:"no doctor found"});
    }
    const appointment=await Appointment.create({
        date,
        time,
        doctor:doctorId,
        user:userId
    });

    res.status(200).json({success: true, message: "appointment booked",appointment});


})

export {registerAppointment}