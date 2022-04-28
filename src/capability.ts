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
