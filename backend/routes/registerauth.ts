import {Router} from "express";
import User from "../models/user"
import bcrypt from "bcrypt"
const router=Router();

router.post("/register", async (req, res) => {
    const {email,password}=req.body;
    //"Search the User collection for a document whose email equals the email we received."
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        });
    }
    //if not registered then create a new user 
    const hashedpassword=await bcrypt.hash(password,10);
    const newUser = new User({
       email,
       password:hashedpassword,
    });
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "User registered successfully"
    });
});

export default router;