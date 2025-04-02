// if you forget this topic then you please signup and generate token and then login with the help of
// same token import { verifyToken } from "../../utils/auth.utils.js"; and verifyToken use in signIn function

import { signIn, signUp } from "../services/auth.service.js";

export const signUpController = async (req, res, next) => {
    try {
        const { name, email, password, following } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const user = await signUp({ name, email, password, following });
        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error in sign-up process",
            error: err.message,
        });
    }
};

export const signInController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // const token = req.headers.authorization.split(" ")[1];

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await signIn({ email, password });

        // if(!verifyToken(token)){
        //     res.status(403).json({message:"Token is not matched"});
        // }

        res.status(200).json({
            message: "User signed in successfully",
            user,
        });
    } catch (err) {
        res.status(401).json({
            message: "Invalid credentials",
            error: err.message,
        });
    }
};
