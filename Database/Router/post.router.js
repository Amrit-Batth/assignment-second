import { createPostController, getPostsController, getPostByIdController, updatePostByIdController, deletePostByIdController, likePost, addCommentsController} from '../Controller/post.controller.js';
import { Router } from 'express';
import { validatePost } from '../middleware/post.middleware.js';
import { performAuthorization } from '../middleware/auth.middleware.js';

const postRouter = Router();

postRouter.post('/post',performAuthorization, validatePost, createPostController);

postRouter.get('/',getPostsController);

postRouter.get('/:id',getPostByIdController);

postRouter.put('/:id',updatePostByIdController);

postRouter.delete('/:id',deletePostByIdController);

postRouter.put('/:id/like',likePost);

postRouter.put('/:id/addComment',addCommentsController);

export default postRouter;