export type TGetUsersResponse = {
    users: Array<TUserData>;
    limit: number;
    next_page: number;
    page_number: number;
};

export type TUserData = {
    id: string;
    name: string;
    email: string;
    address: string;
};

export type TGetUsersParams = {
    pageNumber: number;
    pageSize: number;
};
