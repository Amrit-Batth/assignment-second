import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String  
    },
    bio: {
        type: String 
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true  
});

const User = mongoose.model('User', userSchema);

export default User
