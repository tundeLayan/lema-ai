import {
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import clsx from 'clsx';
import Loader from './Loader/loader';
import { RenderIf } from './RenderIf';

type TVirtualizedDataTableProps<T, U> = {
    data: T[];
    columns: ColumnDef<T>[];
    handleRowClick?(data: T): unknown;
    isLoading?: boolean;
    isFetching?: boolean;
    isError?: boolean;
    hideHeader?: boolean;
    retryFetch?(): unknown;
    hasNextPage?: boolean;
    isFetchingNextPage?: boolean;
    status?: 'error' | 'success' | 'pending';
    fetchNextPage?: (
        options?: FetchNextPageOptions
    ) => Promise<InfiniteQueryObserverResult<U[], Error>>;

    noDataLabel?: string;
};

function Table<T, U>({
    columns,
    data,
    isError,
    isLoading,
    status,
    handleRowClick,
}: // NOTE: These set of props are suitable for when we want to do infinite loading instead of the pagination we implemented
// hideHeader,
// isFetching,
// retryFetch,
// fetchNextPage,
// hasNextPage,
// isFetchingNextPage,
// noDataLabel,
// ...rest
TVirtualizedDataTableProps<T, U>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        debugTable: true,
    });

    let content = (
        <div className="max-w-[100%] mx-auto  border border-100 rounded-lg  relative mb-4">
            <table className="table-auto w-full border-collapse text-primary-100">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className="py-5 px-4 text-left capitalize text-xs font-medium leading-[18px] text-primary-100"
                                    key={header.id}
                                    colSpan={header.colSpan}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <RenderIf condition={status === 'success'}>
                    <tbody className="divide-y divide-border-100 text-sm font-normal leading-5">
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                onClick={() => {
                                    if (handleRowClick) {
                                        handleRowClick(row.original);
                                    }
                                }}
                                className={clsx(
                                    handleRowClick
                                        ? 'cursor-pointer hover:bg-gray12'
                                        : 'cursor-default',
                                    'transition-all duration-100',
                                    { 'hover:bg-gray-50': handleRowClick }
                                )}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="py-[26px] px-4 text-left"
                                        key={cell.id}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </RenderIf>
            </table>
            <RenderIf condition={status === 'pending'}>
                <div className="h-[400px] flex justify-center items-center w-full relative right-0 left-0">
                    <Loader />
                </div>
            </RenderIf>
        </div>
    );
    if (data.length === 0 && !isLoading)
        if (isError && status === 'error') {
            // content = <NoData label={noDataLabel} retryFetch={retryFetch} />;

            content = (
                <div className="min-h-[250px] py-[24px]">
                    {/* A better component should be returned here to handle error state */}
                    <p>An error occurred</p>
                </div>
            );
        }

    return <div className="overflow-x-auto">{content}</div>;
}

export default Table;
