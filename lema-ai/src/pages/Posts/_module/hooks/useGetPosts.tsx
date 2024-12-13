import { useInfiniteQuery } from '@tanstack/react-query';

import { postsServices } from '../services/posts-service';

const useGetPosts = (filter: { userId: string }) => {
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
        queryFn: async () => {
            return postsServices.getPosts({
                ...filter,
            });
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next_page,
        select: (data) => data?.pages.flatMap((page) => page),
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
