export type TGetUsersResponse = TUserData;
// Pending when pagination is added to backend
{
    // users: Array<TUserData>;
    // limit: number;
    // next_page: number;
    // page_number: number;
}

export type TUserData = {
    id: string;
    name: string;
    email: string;
    address: string;
    // TODO: take out when we add pagination
    next_page: number;
};

export type TGetUsersParams = {
    pageNumber: number;
    pageSize: number;
};
