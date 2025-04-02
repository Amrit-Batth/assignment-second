import { comparePassword, createHashPassword, generateToken } from "../../utils/auth.utils.js";
import User from "../models/user.model.js";
import { createUserService } from "./user.service.js";

// Creating new user data
export const signUp = async ({ name, email, password, following}) => {
    const hashingPassword = createHashPassword(password);

    const newUser = await createUserService({
        name,
        email,
        password: hashingPassword,
        following
    });
    // const token = generateToken({newUser});
    // return token;
    return newUser;
};

// Getting user data (Sign In)
export const signIn = async ({ email, password }) => {
    const user = await User.findOne({ email }).select(" name email password bio");

    if (!user) {
        throw new Error("User not found");
    }

    const isValid = comparePassword(password, user.password);

    if (!isValid) {
        throw new Error("Invalid Credentials");
    }

    const token = generateToken({user});
    // console.log(token);

    return { token };
};
