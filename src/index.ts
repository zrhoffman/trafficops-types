export * from "./about";
export * from "./acme";
export * from "./alert";
export * from "./cache.group";
export * from "./cdn";
export * from "./delivery.service";
export * from "./division";
export * from "./invalidation";
export * from "./iso";
export * from "./login";
export * from "./logs";
export * from "./parameter";
export * from "./physical.location";
export * from "./plugin";
export * from "./profile";
export * from "./server";
export * from "./stats";
export * from "./status";
export * from "./type";
export * from "./user";
export * from "./vault";

import type { Alert } from "./alert";

/**
 * Represents a version of the Traffic Ops API for which this library was made.
 */
interface VersionType  {
	/** The major API version number. */
	readonly major: number;
	/** The minor API version number. */
	readonly minor: number;
	toString(): string;
	/**
	 * Whether the API version is unstable. This will be `false` until the API
	 * has been included in a release in which it was not labelled as
	 * "unstable".
	 */
	readonly unstable: boolean;
}

/**
 * The version of the Traffic Ops API for which this library was made.
 *
 * In general, this is roughly the same as the library package version. However,
 * the Traffic Ops API does not include patch-level numbering - which is good,
 * because it allows this package to use those for bugfixes.
 */
export const VERSION: VersionType = {
	major: 3,
	minor: 1,
	toString() {
		return `${this.major}.${this.minor}`;
	},
	unstable: false
};

/**
 * (Nearly) All responses from the Traffic Ops API conform to this interface.
 */
export interface APIResponse<T> {
	alerts?: Array<Alert>;
	response: T;
	summary?: {
		count: number;
	};
}

/**
 * Represents a response from /ping - the *entire* response, as it isn't an
 * APIResponse.
 */
export interface PingResponse {
	ping: "pong";
}
