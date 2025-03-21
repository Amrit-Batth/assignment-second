import User  from "../models/user.model.js";

// Create User
const createUserService = async (param) => {
    const newUser = new User({
        name: param.name,
        email: param.email,
        profilePicture: param.profilePicture,
        bio: param.bio,
        followers: param.followers || [],
        following: param.following || [],
    });
    await newUser.save();
    return newUser;
};

// Get All Users
const getUsersService = async () => {
    return await User.find();
};

// Get User By ID
const getUserByIdService = async (id) => {
    return await User.findById(id);
};

// Update User
const updateUserByIdService = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};

// Delete User
const deleteUserByIdService = async (id) => {
    return await User.findByIdAndDelete(id);
};

export { createUserService,getUsersService,getUserByIdService,updateUserByIdService,deleteUserByIdService };
