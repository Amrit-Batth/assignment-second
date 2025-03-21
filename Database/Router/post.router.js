import { createPostController, getPostsController, getPostByIdController, updatePostByIdController, deletePostByIdController} from '../Controller/post.controller.js';
import { Router } from 'express';

const postRouter = Router();

postRouter.post('/createPost',createPostController);

postRouter.get('/',getPostsController);

postRouter.get('/:id',getPostByIdController);

postRouter.put('/:id',updatePostByIdController);

postRouter.delete('/:id',deletePostByIdController);

export default postRouter;