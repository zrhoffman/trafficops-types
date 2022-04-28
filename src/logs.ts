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
 * Represents a single Traffic Ops ChangeLog entry as returned by the `/logs`
 * endpoint of its API.
 */
export interface Log {
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	/**
	 * @deprecated This field has no further use, and is subject to removal in
	 * the future.
	 */
	level: "APICHANGE";
	message: string;
	/**
	 * @deprecated This cannot be populated, and so should always be considered
	 * null, and is subject to removal in the future.
	 */
	readonly ticketNum: number | null;
	user: string;
}

/**
 * Converts a changelog entry to a string, suitable for use as a line in a
 * logfile.
 *
 * @example
 * const l = {
 * 	id: 1,
 * 	lastUpdated: new Date(0),
 * 	level: "APICHANGE",
 * 	message: "a message",
 * 	ticketNum: 2,
 * 	user: me
 * }
 *
 * console.log(logEntryToString(l));
 * // Output:
 * // #1 1970-01-01T00:00:00.000Z: me via APICHANGE (From Ticket #2): a message
 *
 * @param log The Log entry being formatted.
 * @returns A string representation of `log`.
 */
export function logEntryToString(log: Log): string {
	const {id, lastUpdated, level, message, ticketNum, user} = log;

	let ret = `#${id} ${lastUpdated.toISOString()}: ${user} via ${level}`;
	if (ticketNum !== null) {
		ret += ` (From Ticket #${ticketNum})`;
	}

	return `${ret}: ${message}`;
}

/**
 * Represents the response from the Traffic Ops API to a request made to its
 * `/logs/newcount` endpoint.
 */
export interface NewLogCount {
	newLogcount: number;
}
