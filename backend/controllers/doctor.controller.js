import { Doctor } from "../models/doctor.model.js";
import { Hospital } from "../models/hospital.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// admin will create Doctor 

const createDoctor = asyncHandler(async (req, res) => {

   
    // toDo : add appointments 

    const { name, experience, specialization, availability, fees, email, hospital } = req.body;

 
    if (!name || !experience || !specialization || !availability || !fees || !email || !hospital) {
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
        return res.status(404).json({ success: false, message: "please upload avatar for doctor" });
    }
    const avatarResponse = await uploadOnCloudinary(req.file.buffer, req.file.originalName)


    const doctor = await Doctor.create({
        name,
        email,
        specialization,
        experience,
        avatar: avatarResponse.secure_url,
        availability,
        fees,
        hospital
    })
    res.status(200).json({ success: true, doctor, message: "doctor created successfully" });

});

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
    const doctors = await Doctor.find();
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
    getAllDoctors
}