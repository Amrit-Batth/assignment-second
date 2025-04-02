import { Router } from "express";
import { signInController, signUpController } from "../Controller/auth.controller.js";

const authRouter = Router();

// Authentication Routes
authRouter.post("/sign-in", signInController);
authRouter.post("/sign-up", signUpController);

export default authRouter;
