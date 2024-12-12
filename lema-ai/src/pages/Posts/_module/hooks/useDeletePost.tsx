import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postsServices } from '../services/posts-service';
import { TErrorResponse } from '@/_module/types/error-response';
import { TGetPostsResponse } from '../types/posts-types';

const useDeletePost = () => {
    const queryClient = useQueryClient();
    const { data, mutate, isPending, error, isError } = useMutation<
        TGetPostsResponse,
        TErrorResponse,
        string
    >({
        mutationFn: postsServices.deletePost,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['posts'],
            });
        },
    });
    return { data, mutate, isPending, error, isError };
};

export default useDeletePost;
