import { useQuery } from '@tanstack/react-query';

import { userService } from '../services/users-service';

const useGetUserById = (userId: string) => {
    const { data, error, isFetching, isPending, status, isError, refetch } =
        useQuery({
            queryKey: ['users', userId],
            queryFn: () => {
                return userService.getUserById(userId);
            },
            enabled: !!userId,
        });

    return {
        data,
        error,
        isFetching,
        isPending,
        isError,
        status,
        refetch,
    };
};

export default useGetUserById;
