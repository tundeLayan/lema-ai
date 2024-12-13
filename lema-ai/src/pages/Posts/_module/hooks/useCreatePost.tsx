import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postsServices } from '../services/posts-service';
import { TErrorResponse } from '@/_module/types/error-response';
import { TCreateNewPostPayload, TGetPostsResponse } from '../types/posts-types';

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    const { data, mutate, isPending, error, isError } = useMutation<
        TGetPostsResponse,
        TErrorResponse,
        TCreateNewPostPayload & { userId: string }
    >({
        mutationFn: postsServices.createPost,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['posts'],
            });
        },
    });
    return { data, mutate, isPending, error, isError };
};
