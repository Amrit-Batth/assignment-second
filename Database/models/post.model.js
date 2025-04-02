import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    media: {
        type: String 
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model
        required: true
    },
    visibility: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  // Reference to users who liked the post
    }],
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
        text: { type: String, required: true },  
        createdAt: { type: Date, default: Date.now }
    }],
    shares: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    hashtags: [{
        type: String  
    }],
    mentions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }]
}, {
    timestamps: true 
});




const Post = mongoose.model('Post', postSchema);

export { Post };
