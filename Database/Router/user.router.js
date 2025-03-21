import { createUserController, getUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController } from '../Controller/user.controller.js';

import { Router } from 'express';

const userRouter = Router();

// Create a new user
userRouter.post('/createUser', createUserController);

// Get all users
userRouter.get('/', getUserController);

// Get a user by ID
userRouter.get('/:id', getUserByIdController);

// Update a user by ID
userRouter.put('/:id', updateUserByIdController);

// Delete a user by ID
userRouter.delete('/:id', deleteUserByIdController);

export default userRouter;
