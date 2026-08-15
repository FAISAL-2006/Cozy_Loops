import { Router } from "express";
import User from "../models/user"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const router = Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// POST /auth/login (Standard Password Login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Check if user registered via Google (no password set)
    if (!user.password) {
      return res.status(400).json({
        success: false,
        message: "This account was created using Google. Please sign in with Google."
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password"
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      message: "Login Successful",
      token,
      role: user.role
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST /auth/google (Google OAuth Login)
router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: "Credential is required"
      });
    }

    // Verify Google ID Token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid Google Token"
      });
    }

    const { email, name = "", picture = "" } = payload;

    // Check if user exists
    let user = await User.findOne({ email });

    // Create user if they don't exist
    if (!user) {
      user = new User({
        name,
        email,
        picture,
        role: "user"
      });

      await user.save();
    }

    // Sign app JWT
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token,
      role: user.role,
      
    });

  } catch (err) {
    console.error("Google Auth error:", err);
    return res.status(500).json({
      success: false,
      message: "Google Authentication Failed"
    });
  }
});

export default router;