export interface IDataUsers {
    meta: Meta;
    data: DataUser[];
}

export interface DataUser {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    password: string;
    role:     Role;
    profile:  string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export enum Role {
    Admin = "admin",
    Moderator = "moderator",
    User = "user",
}

export interface Meta {
    status:     number;
    message:    string;
    pagination: Pagination;
}

export interface Pagination {
    page:        number;
    per_page:    number;
    total_items: number;
    total_pages: number;
}
