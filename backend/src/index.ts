import express, { Application } from 'express';
import cors from 'cors';

import config from 'config';
import postsRouter from './routes/posts';
import usersRouter from './routes/users';
const port = config.get('port') as number;

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(
    cors({
        origin: '*', // Specify frontend origin
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
    })
);

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});
