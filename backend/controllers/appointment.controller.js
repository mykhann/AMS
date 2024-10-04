import { Appointment } from "../models/appointment.model.js";
import { Doctor } from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// patient/user will register appointment 
const registerAppointment = asyncHandler(async(req,res)=>{

    
    const {date,time,reason}=req.body;
    const doctorId=req.params.id
    const userId=req.user._id;
    if (!doctorId || !time || !date ||!reason){
        return res.status(404).json({
            success: false,
            message:"please enter all fields"
        });
    };
    const doctor=await Doctor.findById(doctorId).populate("appointments");
    if (!doctor){
        return res.status(404).json({success: false, message:"no doctor found"});
    }
    const appointment=await Appointment.create({
        date,
        time,
        doctor:doctorId,
        reason,
        patient:userId
    });

    res.status(200).json({success: true, message: "appointment booked",appointment});


});

// user will update the appointment
const updateAppointment =asyncHandler(async(req,res)=>{
const appointmentId=req.params.id;
const source=req.body
const appointment=await Appointment.findById(appointmentId);
if (!appointment){
    return res.status(404).json({success: false, message:"Appointment not found"})
}
if (source.time) appointment.time=source.time;
if (source.date) appointment.date=source.date;
if (source.reason) appointment.reason=source.reason;
await appointment.save()
res.status(200).json({success: true, appointment})
})

// get all appointments ==>   USER APPOINTMENT HISTORY
const getAppointments=asyncHandler(async(req,res)=>{
    const userId=req.user._id;
    const appointments=await Appointment.find({patient:userId}).sort({createdAt:-1}).populate("doctor").populate("patient")
    if (!appointments){
        return res.status(404).json({success: false,
            message:"no appointments found"})
    }
    res.status(200).json({success: true, appointments})

});

// Patient will cancel 

const cancelAppointment = asyncHandler(async(req,res)=>{
    const appointmentId=req.params.id;
    let appointment = await Appointment.findById(appointmentId)
    if (!appointment){
        return res.status(404).json({success: false,
            message:"no appointments found"})
    }

    if (appointment.status !== "pending"){
        return res.status(400).json({
            success: false,
            message:"appointment cannot be cancelled at this stage"
        })
        
    }
    appointment.status="cancelled"
    await appointment.save()
    res.status(200).json({success: true,appointment})


})

// user / doctor will get appointment by ID 

const getAppointmentById=asyncHandler(async(req,res)=>{
    const appointmentId=req.params.id;
   
    const appointment=await Appointment.findById(appointmentId).populate("patient doctor");
    if (!appointment){
        return res.status(404).json({
            success: false,
            message: 'Appointment not found'
        })
    }

    res.status(200).json({
        success: true,
        appointment
    })


})

// DOCTOR VIEW OF UPCOMING + PAST APPOINTMENTS 


const getDoctorAppointments=asyncHandler(async(req,res)=>{
    const doctorId=req.user._id;
    const appointments=await Appointment.find({doctor:doctorId}).populate("patient")
    if (!appointments){
        return res.status(404).json({
            success: false,
            message: 'Appointment not found'
        })
    }
    res.status(200).json({
        success: true,
        appointments
    })

})


// Admin 

// Admin will get all appointments 


const getAllAppointments =asyncHandler(async(req,res)=>{
    const appointments=await Appointment.find().populate("doctor").populate("patient")
    res.status(200).json({
        success: true,
        appointments})
})




export {registerAppointment,getAppointments,updateAppointment,cancelAppointment,getAppointmentById,getDoctorAppointments,getAllAppointments}