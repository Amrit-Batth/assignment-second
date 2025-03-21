import { createPostService , getPostsService , getPostByIdService , updatePostByIdService , deletePostByidService } from '../services/post.service.js';

// Create Post
const createPostController = async (req, res) => {
    try {
        const newPost = await createPostService(req.body);
        if (!newPost) {
            return res.status(500).json({ error: "Post not added" });
        }
        res.status(201).json({ message: "New post added successfully", newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Posts
const getPostsController = async (req, res) => {
    try {
        const allPosts = await getPostsService();
        res.status(200).json({ message: "Posts retrieved successfully", posts: allPosts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Post by ID
const getPostByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await getPostByIdService(id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json({ message: "Post retrieved successfully", post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Post by ID
const updatePostByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await updatePostByIdService(id, req.body);
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found or not updated" });
        }
        res.status(200).json({ message: "Post updated successfully", updatedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Post by ID
const deletePostByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await deletePostByidService(id);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found or already deleted" });
        }
        res.status(200).json({ message: "Post deleted successfully", deletedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createPostController , getPostsController , getPostByIdController , updatePostByIdController , deletePostByIdController };
