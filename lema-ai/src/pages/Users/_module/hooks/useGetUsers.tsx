import { useInfiniteQuery } from '@tanstack/react-query';

import { userService } from '../services/users-service';
import { TGetUsersParams } from '../types/users-types';

const useGetPosts = (filter: TGetUsersParams) => {
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
        queryKey: ['users', filter],
        queryFn: async (args) => {
            const { pageParam } = args;
            return userService.getUsers({
                ...filter,
                next_page: pageParam,
            });
        },
        initialPageParam: '',
        getNextPageParam: (lastPage) => lastPage?.next_page,
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
