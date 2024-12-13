import { useQuery } from '@tanstack/react-query';

import { userService } from '../services/users-service';

const useGetUserCount = () => {
    const { data, error, isFetching, isPending, status, isError, refetch } =
        useQuery({
            queryKey: ['user-count'],
            queryFn: () => {
                return userService.getUserCount();
            },
            refetchOnWindowFocus: false,
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

export default useGetUserCount;
