import React, { useMemo } from 'react';

import { ColumnDef } from '@tanstack/react-table';

import Table from '../../_module/components/Table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import routes from '../../_module/constants/routes';
import PaginationCustom from '@/_module/components/Pagination';

type TUserData = {
    fullname: string;
    email: string;
    address: string;
    id: string;
};
const data: TUserData[] = [
    {
        fullname: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        address: '123 Elm Street, Springfield, IL',
        id: '66bbe5ef-e9b7-467f-b7cc-adb626b7a685',
    },
    {
        fullname: 'Bob Smith',
        email: 'bob.smith@example.com',
        address: '456 Oak Avenue, Denver, CO',
        id: '097ef8af-0dab-452c-b76d-c5ab5c2de53c',
    },
    {
        fullname: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        address: '789 Pine Lane, Austin, TX',
        id: 'e8a28be2-8d14-4cd1-8758-22fc05176e70',
    },
    {
        fullname: 'Diana Prince',
        email: 'diana.prince@example.com',
        address: '101 Maple Drive, Seattle, WA',
        id: '9897715d-c1a6-4070-b2f3-528dc0f8b769',
    },
    // {
    //     fullname: 'Ethan Hunt',
    //     email: 'ethan.hunt@example.com',
    //     address: '202 Birch Boulevard, Boston, MA',
    //     id: '1406e557-3583-49c0-8d36-9fec13a4613f',
    // },
    // {
    //     fullname: 'Fiona Gallagher',
    //     email: 'fiona.gallagher@example.com',
    //     address: '303 Cedar Court, Chicago, IL',
    //     id: 'af725653-ee94-4c74-9ced-02870d8ff7d2',
    // },
    // {
    //     fullname: 'George Miller',
    //     email: 'george.miller@example.com',
    //     address: '404 Walnut Way, Miami, FL',
    //     id: '1f86e707-ddaa-4b1d-9a57-3b9a7617bdc9',
    // },
    // {
    //     fullname: 'Hannah Davis',
    //     email: 'hannah.davis@example.com',
    //     address: '505 Chestnut Circle, Atlanta, GA',
    //     id: '22fe91b7-8cc1-445e-9964-c4b806aa961d',
    // },
    // {
    //     fullname: 'Ian Wright',
    //     email: 'ian.wright@example.com',
    //     address: '606 Willow Street, Portland, OR',
    //     id: '6a693505-e5d8-4ad3-8890-36aed5264b14',
    // },
    // {
    //     fullname: 'Jane Doe',
    //     email: 'jane.doe@example.com',
    //     address: '707 Redwood Road, San Francisco, CA',
    //     id: 'cc6be906-9b7c-4d11-a469-9eab43c77284',
    // },
];

const Users = () => {
    const navigate = useNavigate();

    const columns = useMemo<ColumnDef<TUserData>[]>(
        () => [
            {
                header: 'Full Name',
                cell: (row) => row.getValue(),
                accessorFn: (user) => <p>{user.fullname}</p>,
                size: 100,
            },
            {
                header: 'Email Address',
                cell: (row) => row.getValue(),
                accessorFn: (user) => <p>{user.email}</p>,
                size: 100,
            },
            {
                header: 'Address',
                cell: (row) => row.getValue(),
                accessorFn: (user) => (
                    <p className="flex gap-1 items-center font-semibold text-[14px] leading-7">
                        {user.address}
                    </p>
                ),
                size: 392,
            },
        ],
        []
    );

    const [searchParams /*, setSearchParams*/] = useSearchParams();

    const currentPage = parseInt((searchParams.get('page') as string) || '1');
    const postsPerPage = parseInt(
        (searchParams.get('pageSize') as string) || '4'
    );
    const totalPosts = 40;

    return (
        <div className="">
            <h5 className="text-6xl font-medium leading-[72px] tracking-[-0.02em] mb-6">
                Users
            </h5>
            <Table
                data={data}
                columns={columns}
                handleRowClick={(data) =>
                    navigate(routes.dashboard.posts.routablePath(data.id))
                }
                status="success"
            />
            <PaginationCustom
                page={currentPage}
                pageSize={postsPerPage}
                totalCount={totalPosts}
                pageSizeSelectOptions={{
                    pageSizeOptions: [5, 10, 25, 50],
                }}
            />
        </div>
    );
};

export default Users;
