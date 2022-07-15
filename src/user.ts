/*
 * trafficops-types Typings and utility functions for Traffic Ops API objects.
 * Copyright (C) 2022  ocket8888
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * PostRequestUser is a user as it appears in a POST request to /users.
 * This is subtly different from a user as required in other contexts. For more
 * information, see apache/trafficcontrol#6299.
 */
export interface PostRequestUser {
	addressLine1?: string | null;
	addressLine2?: string | null;
	city?: string | null;
	company?: string | null;
	confirmLocalPasswd: string;
	country?: string | null;
	email: `${string}@${string}.${string}`;
	fullName: string;
	/** @deprecated This has no purpose and should never be used. */
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
	/** @deprecated This has no purpose and should never be used. */
	uid?: number | null;
	username: string;
}

/**
 * Represents a user in a PUT request where the user's password is *not* being
 * changed.
 */
interface PutRequestNotChangingPasswordUser {
	addressLine1?: string | null;
	addressLine2?: string | null;
	city?: string | null;
	company?: string | null;
	country?: string | null;
	email: `${string}@${string}.${string}`;
	fullName: string;
	/** @deprecated This has no purpose and should never be used. */
	gid?: number | null;
	newUser?: boolean | null;
	phoneNumber?: string | null;
	postalCode?: string | null;
	publicSshKey?: string | null;
	role: number;
	stateOrProvince?: string | null;
	tenantId?: never;
	tenantID: number;
	/** @deprecated This has no purpose and should never be used. */
	uid?: number | null;
	username: string;
}

/**
 * PostRequestUser is a user as it appears in a POST request to /users.
 * This is subtly different from a user as required in other contexts. For more
 * information, see apache/trafficcontrol#6299.
 */
export type PutRequestUser = PostRequestUser | PutRequestNotChangingPasswordUser;

/** Generically represents a user in the context of a request. */
export type RequestUser = PutRequestUser | PostRequestUser;

/** Groups the fields common to responses from /users in all contexts. */
interface ResponseUserBase {
	addressLine1: string | null;
	addressLine2: string | null;
	city: string | null;
	company: string | null;
	country: string | null;
	email: `${string}@${string}.${string}`;
	fullName: string;
	/** @deprecated This has no purpose and should never be used. */
	gid: number | null;
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	newUser: boolean | null;
	phoneNumber: string | null;
	postalCode: string | null;
	publicSshKey: string | null;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	registrationSent?: null | Date;
	role: number;
	stateOrProvince: string | null;
	tenant: string;
	tenantID?: never;
	tenantId: number;
	/** @deprecated This has no purpose and should never be used. */
	uid: number | null;
	username: string;
}

/** Represents a response from /users to a PUT or POST request. */
export interface PutOrPostResponseUser extends ResponseUserBase {
	/**
	 * This appears only in response to POST requests, or to PUT requests where
	 * the user's password was changed.
	 */
	confirmLocalPasswd?: string;
	rolename?: never;
	roleName: string;
}

/** Represents a response from /users to a GET request. */
export interface GetResponseUser extends ResponseUserBase {
	confirmLocalPasswd?: never;
	rolename: string;
	roleName?: never;
}

/** Generically represents a user in the context of a response. */
export type ResponseUser = GetResponseUser | PutOrPostResponseUser;

/**
 * User generically represents a user in the context of a PUT, POST, or GET
 * request or response to/from /users.
 */
export type User = PutRequestUser | PostRequestUser | PutOrPostResponseUser | GetResponseUser;

/**
 * ResponseCurrentUser represents a response from /user/current.
 */
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
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
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

/**
 * Checks if a provided user email is valid.
 *
 * @param email The email to check.
 * @returns `true` if `email` is valid, `false` otherwise.
 */
export function userEmailIsValid(email: string): email is `${string}@${string}.${string}` {
	return /^.+@.+\..+$/.test(email);
}

/**
 * Currently, a request to /user/current has no properties. This bug is tracked
 * by apache/trafficcontrol#6367.
 */
export interface RequestCurrentUser {
	addressLine1?: string | null;
	addressLine2?: string | null;
	city?: string | null;
	company?: string | null;
	country?: string | null;
	/**
	 * Note that while this is allowed to be null or undefined, it will **not**
	 * be allowed to be either of those things as a property of a
	 * {@link PostRequestUser} nor as a property of a {@link PutRequestUser}.
	 * This means that setting it as such can cause problems for future requests
	 * and should be avoided whenever possible.
	 */
	email?: string | null;
	/**
	 * Note that while this is allowed to be null or undefined, it will **not**
	 * be allowed to be either of those things as a property of a
	 * {@link PostRequestUser} nor as a property of a {@link PutRequestUser}.
	 * This means that setting it as such can cause problems for future requests
	 * and should be avoided whenever possible.
	 */
	fullName?: string | null;
	/**
	 * @deprecated This serves no purpose and is subject to removal in the
	 * future.
	 */
	gid?: string | null;
	localUser?: boolean | null;
	newUser?: boolean | null;
	phoneNumber?: string | null;
	postalCode?: string | null;
	publicSshKey?: string | null;
	/**
	 * Unlike in virtually every other context, this is allowed to be `null` or
	 * undefined. In that case, it has the meaning "leave this unchanged" rather
	 * than setting it to `null` as with most other properties.
	 */
	role?: number | null;
	stateOrProvince?: string | null;
	/**
	 * Unlike in virtually every other context, this is allowed to be `null` or
	 * undefined. In that case, it has the meaning "leave this unchanged" rather
	 * than setting it to `null` as with most other properties.
	 */
	tenantId?: number | null;
	tenantID?: never;
	/**
	 * @deprecated This serves no purpose and is subject to removal in the
	 * future.
	 */
	uid?: string | null;
	/**
	 * Unlike in virtually every other context, this is allowed to be `null` or
	 * undefined. In that case, it has the meaning "leave this unchanged" rather
	 * than setting it to `null` as with most other properties.
	 */
	username?: never;
}

/**
 * CurrentUser generically represents a "current user" representation in the
 * context of either a request or response. This differs from a "user" in a few
 * key ways as tracked by
 * {@link https://github.com/apache/trafficcontrol/issues/6299 #6299}.
 */
export type CurrentUser = ResponseCurrentUser | RequestCurrentUser;

/**
 * Represents a Role as Traffic Ops requires it in requests.
 */
export interface RequestRole {
	capabilities: Array<string>;
	description: string;
	name: string;
	privLevel: number;
}

/**
 * Represents a Role as Traffic Ops presents it in responses.
 */
export interface ResponseRole extends RequestRole {
	readonly id: number;
}

/**
 * A Role encapsulates the permissions to perform operations through the Traffic
 * Ops API.
 */
export type Role = RequestRole | ResponseRole;

/**
 * Represents a Tenant as Traffic Ops requires it in requests.
 */
export interface RequestTenant {
	active: boolean;
	name: string;
	parentId: number;
}

/**
 * A response to a {@link RequestTenant}.
 */
export interface RequestTenantResponse extends RequestTenant {
	readonly id: number;
	readonly lastUpdated: Date;
}

/**
 * Properties common to Tenants in (almost) all responses.
 */
interface ResponseTenantBase {
	active: boolean;
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/**
 * The root Tenant - it's the only one allowed to have a `null` `parentId`.
 */
interface ResponseRootTenant extends ResponseTenantBase {
	active: true;
	name: "root";
	parentId: null;
}

/**
 * A regular Tenant - its `parentId` must not be `null`.
 */
interface ResponseRegularTenant extends ResponseTenantBase {
	// I know this doesn't work, but I'm doing it anyway.
	name: Exclude<string, "root">;
	parentId: number;
}

/**
 * Represents a Tenant as Traffic Ops presents it in responses.
 */
export type ResponseTenant = ResponseRootTenant | ResponseRegularTenant;

/**
 * A Tenant is a grouping of users to manage a shared set of CDN configuration,
 * most frequently one or more Delivery Services.
 */
export type Tenant = ResponseTenant | RequestTenant | RequestTenantResponse;
