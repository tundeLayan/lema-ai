import { v4 as uuidv4 } from 'uuid';

import { connection } from '../connection';
import {
    createPostTemplate,
    deletePostTemplate,
    selectPostsTemplate,
} from './query-tamplates';
import { Post } from './types';

interface CreatePost {
    title: string;
    body: string;
}

export const getPosts = (userId: string): Promise<Post[]> =>
    new Promise((resolve, reject) => {
        connection.all(selectPostsTemplate, [userId], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results as Post[]);
        });
    });

export const deletePost = (userId: string, postId: string): Promise<Post[]> =>
    new Promise((resolve, reject) => {
        connection.all(
            deletePostTemplate,
            [userId, postId],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results as Post[]);
            }
        );
    });

export const createPost = (
    data: CreatePost,
    userId: string
): Promise<boolean> =>
    new Promise((resolve, reject) => {
        const { title, body } = data;
        const createdAt = new Date();
        const id = uuidv4();
        connection.run(
            createPostTemplate,
            [id, title, body, userId, createdAt],
            (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            }
        );
    });
