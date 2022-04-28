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

/** ResponseStatus represents a Status as returned in responses from the API. */
export interface ResponseStatus {
	description: string | null;
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
}

/** RequestStatus represents a Status as used in requests to the API. */
export interface RequestStatus {
	description?: string | null;
	name: string;
}

/**
 * Status generically represents a Status in the context of an API request or
 * response.
 */
export type Status = ResponseStatus | RequestStatus;

/** Represents a request to change a server's Status. */
export interface StatusChangeRequest {
	/**
	 * This is required to be a non-empty string if and only if `status` is
	 * `ADMIN_DOWN` or `OFFLINE`.
	 * @default ""
	 */
	offlineReason?: string | null;
	status: string;
}
