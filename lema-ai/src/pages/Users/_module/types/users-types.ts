export type TGetUsersResponse = TUserData;

export type TUserData = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    address?: Address;

    next_page: number;
};

export type TUsersData = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;

    next_page: number;
};

export interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

export type TGetUsersParams = {
    pageNumber: number;
    pageSize: number;
};
