import { Router, Request, Response } from 'express';

import { v4 as uuidv4 } from 'uuid';

import { createPost, deletePost, getPosts } from '../db/posts/posts';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const userId = req.query.userId?.toString();
    if (!userId) {
        res.status(400).send({ error: 'userId is required' });
        return;
    }
    const posts = await getPosts(userId);
    res.send(posts);
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const userId = req.query.userId?.toString();
        if (!userId) {
            res.status(400).send({ error: 'userId is required' });
            return;
        }

        const postId = req.params.id;
        if (!postId) {
            res.status(400).json({ error: 'Post ID is required' });
            return;
        }

        const deleted = await deletePost(userId, postId);
        if (!deleted) {
            res.status(404).json({ error: 'Post Not Found' });
            return;
        }
        res.send({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post');
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        if (!req.body) {
            res.status(400).send({ error: 'Post title and body are required' });
            return;
        }

        const { title, body } = req.body;
        const userId = req.query.userId?.toString();
        if (!userId) {
            res.status(400).send({ error: 'userId is required' });
            return;
        }

        if (
            !title ||
            typeof title !== 'string' ||
            !body ||
            typeof body !== 'string'
        ) {
            res.status(400).json({ error: 'Invalid input data' });
            return;
        }

        await createPost({ title, body }, userId);
        res.json({ message: 'Post created successfully' });
    } catch (error) {
        console.error('Error creating post', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
