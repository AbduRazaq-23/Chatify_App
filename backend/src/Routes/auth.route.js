import { Router } from "express";
import {
  logIn,
  register,
  verifyEmail,
  logOut,
  getProfile,
} from "../Controllers/auth.controller.js";
import verifyUser from "../Middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", logIn);
router.get("/logout", verifyUser, logOut);
router.get("/get-profile", verifyUser, getProfile);

export default router;
