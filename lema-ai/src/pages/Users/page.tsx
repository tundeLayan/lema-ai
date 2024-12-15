import { useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Table from '../../_module/components/Table';
import routes from '../../_module/constants/routes';
import PaginationCustom from '@/_module/components/Pagination';
import useGetUsers from './_module/hooks/useGetUsers';
import useGetUserCount from './_module/hooks/useGetUserCount';
import { TUsersData } from './_module/types/users-types';
import { shortenWord } from '@/_module/utils/shorten-word-util';

const Users = () => {
    const navigate = useNavigate();

    const columns = useMemo<ColumnDef<TUsersData>[]>(
        () => [
            {
                header: 'Full Name',
                cell: (row) => row.getValue(),
                accessorFn: (user) => <p>{user.name}</p>,
            },
            {
                header: 'Email Address',
                cell: (row) => row.getValue(),
                accessorFn: (user) => <p>{user.email}</p>,
            },
            {
                header: 'Address',
                cell: (row) => row.getValue(),
                accessorFn: (user) => {
                    const address = `${user?.street}, ${user?.state}, ${user?.city}, ${user?.zipcode}`;
                    return (
                        <p
                            className="flex gap-1 items-center font-semibold text-[14px] leading-7 truncate"
                            title={address}
                        >
                            {shortenWord(address, 30)}
                        </p>
                    );
                },
                size: 392,
                minSize: 392,
                maxSize: 392,
            },
        ],
        []
    );

    const [searchParams /*, setSearchParams*/] = useSearchParams();

    const pageNumber = parseInt((searchParams.get('page') as string) || '1');
    const pageSize = parseInt((searchParams.get('pageSize') as string) || '4');

    const { data: DataFromAPI, status } = useGetUsers({ pageNumber, pageSize });
    const { data: userCount } = useGetUserCount();

    const totalPosts = userCount?.count ?? 0;

    return (
        <div className="">
            <h5 className="text-6xl font-medium leading-[72px] tracking-[-0.02em] mb-6">
                Users
            </h5>
            <Table
                data={DataFromAPI ?? []}
                columns={columns}
                handleRowClick={(data) =>
                    navigate(routes.dashboard.posts.routablePath(data.id))
                }
                status={status}
            />
            <PaginationCustom
                page={pageNumber}
                pageSize={pageSize}
                totalCount={totalPosts}
                pageSizeSelectOptions={{
                    pageSizeOptions: [5, 10, 25, 50],
                }}
            />
        </div>
    );
};

export default Users;
