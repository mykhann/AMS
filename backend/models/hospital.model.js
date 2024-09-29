import mongoose from "mongoose";
const {Schema}=mongoose
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    departments: [
        {
            type: String
        }
    ],
    doctors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    ]
}, { timestamps: true });
export const Hospital = mongoose.model("Hospital",hospitalSchema)