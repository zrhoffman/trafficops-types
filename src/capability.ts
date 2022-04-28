/**
 * Represents a mapping of a Traffic Ops API route to a Capability it might
 * require. These cannot be modified through the API.
 *
 * @deprecated These supposed restrictions have never been and never will be
 * enforced at any level. Capabilities as a concept have been removed/reworked
 * in the latest version of the API, and the Traffic Ops API route that used to
 * expose this structure has been removed.
 */
export interface APICapability {
	readonly capability: string;
	readonly httpRoute: string;
	readonly id: number;
	readonly lastUpdated: Date;
	readonly method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
}

/**
 * A Capability represents permission to use an HTTP request method on a Traffic
 * Ops API endpoint. As of ATCv6, these are not modifiable through the API.
 *
 * @deprecated These supposed restrictions have never been and never will be
 * enforced at any level. Capabilities as a concept have been removed/reworked
 * in the latest version of the API, and the Traffic Ops API route that used to
 * expose this structure has been removed.
 */
export interface Capability {
	readonly description: string;
	readonly lastUpdated: Date;
	readonly name: string;
}
