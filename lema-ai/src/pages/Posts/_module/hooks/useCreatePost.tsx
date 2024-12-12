import { useMutation } from '@tanstack/react-query';

import { postsServices } from '../services/posts-service';
import { TErrorResponse } from '@/_module/types/error-response';
import { TCreateNewPostPayload, TGetPostsResponse } from '../types/posts-types';

export const useCreatePost = () => {
    const { data, mutate, isPending, error, isError } = useMutation<
        TGetPostsResponse,
        TErrorResponse,
        TCreateNewPostPayload
    >({
        mutationFn: postsServices.createPost,
    });
    return { data, mutate, isPending, error, isError };
};
