import { useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Table from '../../_module/components/Table';
import routes from '../../_module/constants/routes';
import PaginationCustom from '@/_module/components/Pagination';
import useGetUsers from './_module/hooks/useGetUsers';
import useGetUserCount from './_module/hooks/useGetUserCount';

type TUserData = {
    name: string;
    email: string;
    address: string;
    id: string;
};
// const data: TUserData[] = [
//     {
//         name: 'Alice Johnson',
//         email: 'alice.johnson@example.com',
//         address: '123 Elm Street, Springfield, IL',
//         id: '66bbe5ef-e9b7-467f-b7cc-adb626b7a685',
//     },
//     {
//         name: 'Bob Smith',
//         email: 'bob.smith@example.com',
//         address:
//             '456 Oak Avenue, Denver, CO 456 Oak Avenue, Denver, CO 456 Oak Avenue, Denver, CO , Denver, CO',
//         id: '097ef8af-0dab-452c-b76d-c5ab5c2de53c',
//     },
//     {
//         name: 'Charlie Brown',
//         email: 'charlie.brown@example.com',
//         address: '789 Pine Lane, Austin, TX',
//         id: 'e8a28be2-8d14-4cd1-8758-22fc05176e70',
//     },
//     {
//         name: 'Diana Prince',
//         email: 'diana.prince@example.com',
//         address: '101 Maple Drive, Seattle, WA',
//         id: '9897715d-c1a6-4070-b2f3-528dc0f8b769',
//     },
// ];

const Users = () => {
    const navigate = useNavigate();

    const columns = useMemo<ColumnDef<TUserData>[]>(
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
                accessorFn: (user) => (
                    <p
                        className="flex gap-1 items-center font-semibold text-[14px] leading-7 truncate"
                        style={{
                            width: '392px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {user.address}
                    </p>
                ),
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

    const formattedData = useMemo(() => {
        if (DataFromAPI) {
            return DataFromAPI.map((user) => ({
                ...user,
                address: '101 Maple Drive, Seattle, WA',
            }));
        }
        return [];
    }, [DataFromAPI]);

    return (
        <div className="">
            <h5 className="text-6xl font-medium leading-[72px] tracking-[-0.02em] mb-6">
                Users
            </h5>
            <Table
                data={formattedData}
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
