export interface PostRequestUser {
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    company?: string | null;
    confirmLocalPasswd: string;
    country?: string | null;
    email: `${string}@${string}.${string}`;
    fullName: string;
    gid?: number | null;
    localPasswd: string;
    newUser?: boolean | null;
    phoneNumber?: string | null;
    postalCode?: string | null;
    publicSshKey?: string | null;
    role: number;
    stateOrProvince?: string | null;
    tenantId?: never;
    tenantID: number;
    uid?: number | null;
    username: string;
}
interface PutRequestNotChangingPasswordUser {
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    company?: string | null;
    country?: string | null;
    email: `${string}@${string}.${string}`;
    fullName: string;
    gid?: number | null;
    newUser?: boolean | null;
    phoneNumber?: string | null;
    postalCode?: string | null;
    publicSshKey?: string | null;
    role: number;
    stateOrProvince?: string | null;
    tenantId?: never;
    tenantID: number;
    uid?: number | null;
    username: string;
}
export declare type PutRequestUser = PostRequestUser | PutRequestNotChangingPasswordUser;
interface ResponseUser {
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    email: `${string}@${string}.${string}`;
    fullName: string;
    gid: number | null;
    id: number;
    readonly lastUpdated: Date;
    newUser: boolean | null;
    phoneNumber: string | null;
    postalCode: string | null;
    publicSshKey: string | null;
    registrationSent?: null | Date;
    role: number;
    stateOrProvince: null;
    tenant: string;
    tenantID?: never;
    tenantId: number;
    uid: number | null;
    username: string;
}
export interface PutOrPostResponseUser extends ResponseUser {
    confirmLocalPasswd?: string;
    rolename?: never;
    roleName: string;
}
export interface GetResponseUser extends ResponseUser {
    confirmLocalPasswd?: never;
    rolename: string;
    roleName?: never;
}
export declare type User = PutRequestUser | PostRequestUser | PutOrPostResponseUser | GetResponseUser;
export interface ResponseCurrentUser {
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    email: `${string}@${string}.${string}`;
    fullName: string;
    gid: number | null;
    id: number;
    readonly lastUpdated: Date;
    localUser: boolean;
    newUser: boolean;
    phoneNumber: string | null;
    postalCode: string | null;
    publicSshKey: string | null;
    role: number;
    rolename?: never;
    roleName: string;
    stateOrProvince: string | null;
    tenant: string;
    tenantId: number;
    uid: number | null;
    username: string;
}
export declare function userEmailIsValid(email: string): email is `${string}@${string}.${string}`;
export interface RequestCurrentUser {
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    company?: string | null;
    country?: string | null;
    email?: string | null;
    fullName?: string | null;
    gid?: string | null;
    localUser?: boolean | null;
    newUser?: boolean | null;
    phoneNumber?: string | null;
    postalCode?: string | null;
    publicSshKey?: string | null;
    role?: number | null;
    stateOrProvince?: string | null;
    tenantId?: number | null;
    tenantID?: never;
    uid?: string | null;
    username?: never;
}
export declare type CurrentUser = ResponseCurrentUser | RequestCurrentUser;
export interface RequestRole {
    capabilities: Array<string>;
    description: string;
    name: string;
    privLevel: number;
}
export interface ResponseRole extends RequestRole {
    readonly id: number;
}
export declare type Role = RequestRole | ResponseRole;
export interface RequestTenant {
    active: boolean;
    name: string;
    parentId: number;
}
export interface RequestTenantResponse extends RequestTenant {
    readonly id: number;
    readonly lastUpdated: Date;
}
interface ResponseTenantBase {
    active: boolean;
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
}
interface ResponseRootTenant extends ResponseTenantBase {
    active: true;
    name: "root";
    parentId: null;
}
interface ResponseRegularTenant extends ResponseTenantBase {
    name: Exclude<string, "root">;
    parentId: number;
}
export declare type ResponseTenant = ResponseRootTenant | ResponseRegularTenant;
export declare type Tenant = ResponseTenant | RequestTenant | RequestTenantResponse;
export {};
