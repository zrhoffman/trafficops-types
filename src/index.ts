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

import type { Alert } from "./alert.js";

export * from "./about.js";
export * from "./acme.js";
export * from "./alert.js";
export * from "./cache.group.js";
export * from "./capability.js";
export * from "./cdn.js";
export * from "./coordinate.js";
export * from "./delivery.service.request.js";
export * from "./delivery.service.js";
export * from "./division.js";
export * from "./dnssec.js";
export * from "./federation.js";
export * from "./invalidation.js";
export * from "./iso.js";
export * from "./login.js";
export * from "./logs.js";
export * from "./origin.js";
export * from "./physical.location.js";
export * from "./plugin.js";
export * from "./profile.js";
export * from "./router.js";
export * from "./server.capability.js";
export * from "./server.js";
export * from "./snap.and.queue.js";
export * from "./ssl.js";
export * from "./stats.js";
export * from "./status.js";
export * from "./steering.js";
export * from "./topology.js";
export * from "./type.js";
export * from "./uri.signing.js";
export * from "./user.js";
export * from "./vault.js";

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
