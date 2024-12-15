export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address?: Address;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}
