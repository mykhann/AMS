import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['patient', 'admin','doctor'],
        default: 'patient'
    },
    phone: {
        type: String,
        required: true
    },
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ]
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);