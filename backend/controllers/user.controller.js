import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";


const register = asyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.status(400).json({
            success: false,
            message: "please enter all fields"
        });
    };

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    };

    const securePass = await bcrypt.hash(password, 10)

    if (!req.file) {
        return res.status(404).json({ success: false, message: "Please upload avatar" });
    }
    const avatarResult = await uploadOnCloudinary(req.file.buffer, req.file.originalName)

    const user = await User.create({
        name: name,
        email: email,
        password: securePass,
        phone: phone,
        avatar: avatarResult.secure_url

    })

    res.status(200).json({ success: true, message: "user created successfully", user });




});

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({ success: false, message: "please enter your email and password" });
    }

    let user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ success: false, message: "no user regsitered with this email" });
    }
    const comparingPassword = await bcrypt.compare(password, user.password)
    if (!comparingPassword) {
        return res.status(401).json({ success: false, message: "please enter correct password" });
    }
    const userData = { userId: user._id }
    const token = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });

    user = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        phone: user.phone,
        role: user.role
    }

    const cookieOptions = {
        secure: true,
        httpOnly: true
    }
    res.status(200).cookie("token", token, cookieOptions).json({
        success: true,
        message: "welcome back",
        user,
        token
    })
})

const Logout = asyncHandler(async (req, res) => {

    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "logged out"
    })

});


const updateUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const source = req.body;

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found",
        })
    }
    if (source.name) user.name = source.name;
    if (source.email) user.email = source.email;
    if (source.password) user.password = source.password;
    if (source.phone) user.phone = source.phone;

    if (req.file) {
        const avatar = await uploadOnCloudinary(req.file.buffer, req.file.originalName);
        user.avatar = avatar.secure_url
    }
    await user.save();
    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
    });

})

export {
    register,
    Login,
    Logout,
    updateUser
}