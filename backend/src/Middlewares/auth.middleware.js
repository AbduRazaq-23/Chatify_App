import jwt from "jsonwebtoken";
import User from "../Models/User.model.js";

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "unauthorized request" });
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("decodedToken here", decodedToken);

    const user = await User.findById(decodedToken?.id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json("Invalid Token id");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "invalid token" });
  }
};

export default verifyUser;
