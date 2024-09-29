import mongoose from "mongoose";
const {Schema}=mongoose;

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    fees: {
        type: Number,
        required: true
    },
    hospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ],
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ]
}, { timestamps: true });


export const Doctor=mongoose.model('Doctor',doctorSchema);