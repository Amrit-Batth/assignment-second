import { Post } from "../models/post.model.js";

// Create Post
const createPostService = async (param) => {
    const newPost = new Post({
        content: param.content,
        media: param.media,
        postedBy: param.postedBy,
        visibility: param.visibility,  // Fixed typo
        likes: param.likes || [],
        comments: param.comments || [],
        shares: param.shares || 0,
        views: param.views || 0,
        hashtags: param.hashtags || [],
        mentions: param.mentions || [],
    });

    await newPost.save();
    return newPost; // Added return statement
};

// Get All Posts
const getPostsService = async () => {
    return await Post.find();
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
const deletePostByidService = async (id) => {
    return await Post.findByIdAndDelete(id);
};

export { createPostService, getPostsService, getPostByIdService, updatePostByIdService, deletePostByidService };
