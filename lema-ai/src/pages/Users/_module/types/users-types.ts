export type TGetUsersResponse = {
    id: string;
    next_page: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Array<any>;
};

export type TGetUsersParams = {
    page: number;
    limit: number;
    id: string;
    next_page: string;
};
