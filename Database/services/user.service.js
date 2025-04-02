import User  from "../models/user.model.js";

// Create User
const createUserService = async (param) => {
    const newUser = new User({
        name: param.name,
        email: param.email,
        password : param.password,
        profilePicture: param.profilePicture,
        bio: param.bio,
        followers: param.followers || [],
        following: param.following || [],
    });
    await newUser.save();
    return newUser;
};

// Get All Users
const getUsersService = async()=>{
    return await User.find({});
}

// Get Users By email
const getUsersServiceByEmail = async (email) => {
    return await User.findOne({
        email 
})// this is opional (.select("name email bio"));
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


// Add follower
const addFollower = async (userId1, userId2) => {
    try {
        // Run both database updates in parallel for better performance
        const [updatedUser1, updatedUser2] = await Promise.all([
            User.findByIdAndUpdate(
                userId2,
                { $addToSet: { followers: userId1 } },
                { new: true }
            ),
            User.findByIdAndUpdate(
                userId1,
                { $addToSet: { following: userId2 } },
                { new: true }
            )
        ]);

        return {
            message: "Follower removed successfully",
            updatedUser1,
            updatedUser2
        };

    } catch (error) {
        throw new Error(error.message);
    }
};

//Remove follower
const removeFollower = async (userId1, userId2) => {
    try {
        // Run both database updates in parallel for better performance
        const [updatedUser1, updatedUser2] = await Promise.all([
            User.findByIdAndUpdate(
                userId1,
                { $pull: { followers: userId2 } },
                { new: true }
            ),
            User.findByIdAndUpdate(
                userId2,
                { $pull: { following: userId1 } },
                { new: true }
            )
        ]);

        return {
            message: "Follower removed successfully",
            updatedUser1,
            updatedUser2
        };

    } catch (error) {
        throw new Error(error.message);
    }
};

//find followers
const findFollowers = async(id)=>{
    const result  = await User.findById({
        "_id":id
    });
    return result.followers; 
} 



export { createUserService,getUsersService,getUserByIdService,updateUserByIdService,deleteUserByIdService,addFollower, removeFollower, findFollowers,getUsersServiceByEmail };
