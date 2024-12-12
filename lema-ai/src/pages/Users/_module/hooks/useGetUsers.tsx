import { useInfiniteQuery } from '@tanstack/react-query';

import { userService } from '../services/users-service';
import { TGetUsersParams } from '../types/users-types';

const useGetUsers = (filter: TGetUsersParams) => {
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
                pageNumber: pageParam,
            });
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.next_page,
        select: (data) => data?.pages.flatMap((page) => page.users),
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

export default useGetUsers;
