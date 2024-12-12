import { useInfiniteQuery } from '@tanstack/react-query';

import { postsServices } from '../services/posts-service';
import { TGetPostParams } from '../types/posts-types';

const useGetPosts = (filter: TGetPostParams) => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        status,
        isError,
        refetch,
        isPending,
    } = useInfiniteQuery({
        queryKey: ['posts', filter],
        queryFn: async (args) => {
            const { pageParam } = args;
            return postsServices.getPosts({
                ...filter,
                next_page: pageParam,
            });
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.next_page,
        select: (data) => data?.pages.flatMap((page) => page.data),
    });
    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isFetchingNextPage,
        isError,
        status,
        refetch,
        isPending,
    };
};

export default useGetPosts;
