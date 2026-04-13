import express from "express";
import { googleAuth,logOut } from "../controllers/authController.js";
import { getCurrentUser } from "../controllers/userController.js";
import isAuth from "../middlewares/isAuth.js";

const authRouter = express.Router();



authRouter.post("/google", googleAuth)
authRouter.get("/logout", logOut)
authRouter.get("/current-user", isAuth, getCurrentUser);

export default authRouter;