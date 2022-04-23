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

/** Groups the fields common to responses from /users in all contexts. */
interface ResponseUser {
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
	lastUpdated: Date;
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
	stateOrProvince: null;
	tenant: string;
	tenantID?: never;
	tenantId: number;
	/** @deprecated This has no purpose and should never be used. */
	uid: number | null;
	username: string;
}

/** Represents a response from /users to a PUT or POST request. */
export interface PutOrPostResponseUser extends ResponseUser {
	/**
	 * This appears only in response to POST requests, or to PUT requests where
	 * the user's password was changed.
	 */
	confirmLocalPasswd?: string;
	rolename?: never;
	roleName: string;
}

/** Represents a response from /users to a GET request. */
export interface GetResponseUser extends ResponseUser {
	confirmLocalPasswd?: never;
	rolename: string;
	roleName?: never;
}

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
	lastUpdated: Date;
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
 * key ways as tracked by apache/trafficcontrol#6299.
 */
export type CurrentUser = ResponseCurrentUser | RequestCurrentUser;
