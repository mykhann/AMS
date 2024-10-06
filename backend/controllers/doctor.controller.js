import { Doctor } from "../models/doctor.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// admin will create Doctor 

const createDoctor = asyncHandler(async (req, res) => {


    const { name, experience, specialization, description, fees, email, password } = req.body;


    if (!name || !experience || !specialization || !fees || !email || !password || !description) {
        return res.status(404).json({
            success: false,
            message: "please enter all fields",
        });
    };

    let doctorExists = await Doctor.findOne({ email })
    if (doctorExists) {
        return res.status(400).json({
            success: false,
            message: "Doctor already exists with this email"
        })
    }
    if (!req.file) {
        return res.status(404).json({ success: false, message: "Please upload a profile picture for the doctor" });
    }
    const hashedPass = await bcrypt.hash(password, 10)
    const avatarResponse = await uploadOnCloudinary(req.file.buffer, req.file.originalName)


    const doctor = await Doctor.create({
        name,
        email,
        password: hashedPass,
        specialization,
        experience,
        
        avatar: avatarResponse.secure_url,
        description,
        fees,

    })
    res.status(200).json({ success: true, doctor, message: "doctor created successfully" });

});

const LoginDoctor = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({ success: false, message: "Please enter all fields" });
    }

    let doctor = await Doctor.findOne({ email });
    if (!doctor) {
        return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
    const comparingPassword = await bcrypt.compare(password, doctor.password)
    if (!comparingPassword) {
        return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
    const doctorData = { doctorId: doctor._id }
    const token = jwt.sign(doctorData, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });

    doctor = {
        name: doctor.name,
        email: doctor.email,
        avatar: doctor.avatar,
        specialization: doctor.specialization,
        experience: doctor.experience,
        availability: doctor.availability,
        fees: doctor.fees
    }

    const cookieOptions = {
        secure: true,
        httpOnly: true
    }
    res.status(200).cookie("token", token, cookieOptions).json({
        success: true,
        message: "welcome back",
        doctor,
        token
    })
})

//admin will Delete a doctor 

const deleteDoctor = asyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await Doctor.findByIdAndDelete(doctorId);
    if (!doctor) {
        return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, message: "Doctor deleted successfully" });

})


// admin will Get a single Doctor by ID 

const getDoctoryById = asyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
        return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, doctor });
})

const updateDoctor = asyncHandler(async (req, res) => {
    const doctorId = req.params.id;
    const source = req.body
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
        return res.status(404).json({ success: false, message: "doctor not found" });
    }

    if (source.name) doctor.name = source.name;
    if (source.email) doctor.email = source.email;
    if (source.phone) doctor.phone = source.phone;
    if (source.fees) doctor.fees = source.fees;
    if (source.availability) doctor.availability = source.availability;
    if (req.file) {
        const avatarResponse = await uploadOnCloudinary(req.file.buffer, req.file.originalName)
        doctor.avatar = avatarResponse.secure_url
    }
    await doctor.save()
    res.status(200).json({
        success: true,
        message: "Doctor profile updated successfully",
        doctor
    })
});

const getAllDoctors = asyncHandler(async (req, res) => {
    const doctors = await Doctor.find().sort({createdAt:-1});
    if (!doctors) {
        return res.status(404).json({ success: false, message: "Doctors not found" });
    }
    res.status(200).json({ success: true, doctors });
})


export {
    createDoctor,
    deleteDoctor,
    getDoctoryById,
    updateDoctor,
    getAllDoctors,
    LoginDoctor
}