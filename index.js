import express from 'express';
import connection from './Database/connection.js';
import userRouter from './Database/Router/user.router.js';
import postRouter from './Database/Router/post.router.js';
import authRouter from './Database/Router/auth.router.js';

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/auth', authRouter);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
