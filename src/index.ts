export * from "./about";
export * from "./acme";
export * from "./alert";
export * from "./cache.group";
export * from "./capability";
export * from "./cdn";
export * from "./coordinate";
export * from "./delivery.service.request";
export * from "./delivery.service";
export * from "./division";
export * from "./dnssec";
export * from "./federation";
export * from "./invalidation";
export * from "./iso";
export * from "./login";
export * from "./logs";
export * from "./origin";
export * from "./physical.location";
export * from "./plugin";
export * from "./profile";
export * from "./router";
export * from "./server.capability";
export * from "./server";
export * from "./snap.and.queue";
export * from "./ssl";
export * from "./stats";
export * from "./status";
export * from "./steering";
export * from "./topology";
export * from "./type";
export * from "./uri.signing";
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
export interface APISuccessResponse<T> {
	/** Any and all Alerts that may accompany the response. */
	alerts?: Array<Alert>;
	/** The actual response object. */
	response: T;
	/** An object containing summary statistics. */
	summary?: {
		/**
		 * The total number of results that *would have* been returned if not
		 * for pagination controls used in the request's query string.
		 */
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
