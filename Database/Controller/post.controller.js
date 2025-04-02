import { createPostService, getPostsService, getPostByIdService, updatePostByIdService, deletePostByIdService, postlike, addCommentToPost } from '../services/post.service.js';

// Create Post
const createPostController = async (req, res, next) => {
    try {
        req.auth._id
        const {auth,body}=req  
        
        const post = await createPostService(body, auth._id);
        res.status(201).send({data:post,success:true,message:"Post created successfully" });
        // next();
    } catch (error) {
        console.error("Error in createPostController:", error);
        res.status(500).json({ message: "Error in createPost controller", error: error.message });
    }
    
};


// Get All Posts
const getPostsController = async (req, res) => {
    const { sort, limit } = req.query;
    const limitValue = isNaN(parseInt(limit)) ? 10 : parseInt(limit); // Default to 10 if invalid

    try {
        const allPosts = await getPostsService(sort, limitValue);
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
        const deletedPost = await deletePostByIdService(id);
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found or already deleted" });
        }
        res.status(200).json({ message: "Post deleted successfully", deletedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Like a Post
const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        
        if (!id || !userId) {
            return res.status(400).json({ error: "Post ID and User ID are required" });
        }

        const updatedPost = await postlike(id, userId);
        res.status(200).json({ message: "Post liked successfully", updatedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add comments on post by user id
const addCommentsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, text } = req.body;

        if (!id || !userId || !text) {
            return res.status(400).json({ error: "Post ID, User ID, and Comment Text are required" });
        }

        const addNewComment = await addCommentToPost(id, userId, text);
        res.status(200).json({ message: "New comment added successfully", addNewComment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createPostController, getPostsController, getPostByIdController, updatePostByIdController, deletePostByIdController, likePost, addCommentsController };
