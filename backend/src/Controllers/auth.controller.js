import User from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendVerificationEmail from "../Utills/SendEmails.js";

//////////////////////////////////////////////////////// user to register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      res.status(401).json("all filled are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json("email already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassord = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassord,
    });

    await user.save();

    await sendVerificationEmail(user.email, user._id);

    return res.status(201).json({
      message: " user registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    return res.status(400).json("error registering" + error);
  }
};
//////////////////////////////////////////////////////// user to verify has email
const verifyEmail = async (req, res) => {
  try {
    const { token, id } = req.query;

    const user = await User.findOne({
      _id: id,
    });

    if (!user) {
      return res.status(400).send("Invalid or expired verification link");
    }

    user.isVerified = true;

    await user.save();

    res.send("Email verified! You may now login.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error verifying email");
  }
};
//////////////////////////////////////////////////////// user to login
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ((!email, !password)) {
      res.status(401).json("all filled are required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(409).json("don't have an account signin first");
    }
    if (!user.isVerified === true)
      return res.status(400).json({ message: "verfiy email first" });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json("invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    user.token = token;
    await user.save({ validateBeforeSave: false });

    const options = {
      httpOnly: true,
      secure: false,
    };

    return res
      .status(200)
      .cookie("token", token, options)
      .json({
        message: " user login successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json("Server error during login");
  }
};
/////////////////////////////////////////////////////// user to logout
const logOut = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: { token: 1 },
      },
      { new: true }
    );
    const options = {
      httpOnly: true,
    };
    return res
      .clearCookie("token", options)
      .status(200)
      .json("logOut succesfully");
  } catch (error) {
    return res.json({ message: "invalid token" } + error);
  }
};
/////////////////////////////////////////////////////// user to get profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -token");

    return res.status(200).json({ user, message: "getProfile succesfully" });
  } catch (error) {
    return res.json({ message: "invalid user" } + error);
  }
};

export { register, verifyEmail, logIn, logOut, getProfile }; // Name export
