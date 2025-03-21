import { createUserService, getUsersService, getUserByIdService, updateUserByIdService, deleteUserByIdService } from '../services/user.service.js';

// Create User
const createUserController = async (req, res) => {
    try {
        const newUser = await createUserService(req.body);
        if (!newUser) {
            return res.status(500).json({ error: "User not added" });
        }
        res.status(201).json({ message: "New user added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Users
const getUserController = async (req, res) => {
    try {
        const allUsers = await getUsersService();
        res.status(200).json({ message: "Users retrieved successfully", users: allUsers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User by ID
const getUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserByIdService(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User by ID
const updateUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUserByIdService(id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found or not updated" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete User by ID
const deleteUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserByIdService(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found or already deleted" });
        }
        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createUserController, getUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController };
