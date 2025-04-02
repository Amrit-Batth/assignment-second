import { Post } from "../models/post.model.js";
import mongoose from 'mongoose';
// Create Post
const createPostService = async (data,auth) => {
  

        const newPost = new Post({
            ...data,
            postedBy :auth,
        });

        await newPost.save();
        return newPost; // Added return statement
   
};

// Get All Posts
const getPostsService = async (sortOrder,limitQuery) => {
    const sortValue = sortOrder === "asc" ? 1 : -1;
    return await Post.find({}).sort({ createdAt: sortValue }).limit(limitQuery).populate('postedBy', 'name email bio');
}; 

// Get Post By ID
const getPostByIdService = async (id) => {
    return await Post.findById(id);
};

// Update Post
const updatePostByIdService = async (id, data) => {
    return await Post.findByIdAndUpdate(id, data, { new: true });
};

// Delete Post
const deletePostByIdService = async (id) => {
    return await Post.findByIdAndDelete(id);
};

// like post by user
const postlike = async(id,userId)=>{
    return await Post.findByIdAndUpdate(
        id,
        { $addToSet: { likes: userId } }, // Add user ID only if not already present
        { new: true }
    );   
}
// Add comment by user id
const addCommentToPost = async (postId, userId, text) => {
    return await Post.findByIdAndUpdate(
        postId,
        { $push: { comments: { userId, text } } }, // Push a new comment object
        { new: true }
    );
};

export { createPostService, getPostsService, getPostByIdService, updatePostByIdService, deletePostByIdService, postlike, addCommentToPost};
