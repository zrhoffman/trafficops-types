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
 * TypeFromResponse represents a Type as shown in the responses from the API.
 *
 * This breaks the naming convention used in the rest of this library because
 * ResponseType is already a global type in browsers and NodeJS.
 */
export interface TypeFromResponse {
	description: string;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
	useInTable: string;
}

/** RequestType represents a Type as given in requests to the API. */
export interface RequestType {
	description: string;
	name: string;
	/**
	 * In practice this is limited to "server" and "cachegroup".
	 */
	useInTable: string;
}

/** Type generically represents a Type in the context of an API request or response.  */
export type Type = TypeFromResponse | RequestType;
