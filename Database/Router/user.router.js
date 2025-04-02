import { createUserController, getUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController,newFollowerAdd, followerRemove, findFollowerController,getUserByEmailController } from '../Controller/user.controller.js';
import { validateEmail, validateName } from '../middleware/user.midleware.js';

import { Router } from 'express';

const userRouter = Router();

// Create a new user
userRouter.post('/createUser', validateName,validateEmail , createUserController);

// Get all users
userRouter.get('/',getUserController);

// Get User by email id
userRouter.get('/email/:email',validateEmail,getUserByEmailController)

// Get a user by ID
userRouter.get('/:id', getUserByIdController);

// Update a user by ID
userRouter.put('/:id', updateUserByIdController);

// Delete a user by ID
userRouter.delete('/:id', deleteUserByIdController);

// Add new follower
userRouter.put('/:id/addfollower',newFollowerAdd);

//remove follower
userRouter.put('/:id/removefollower',followerRemove);

//find-followers
userRouter.get('/:id/findfollowers',findFollowerController);

export default userRouter;
