import connection from './Database/connection.js';
import express from 'express';
import userRouter from './Database/Router/user.router.js';
import postRouter from './Database/Router/post.router.js';

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
