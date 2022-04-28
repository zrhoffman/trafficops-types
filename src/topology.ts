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
 * Represents a Topology as Traffic Ops requires it in requests to its API.
 */
export interface RequestTopology {
	description?: string | null;
	name: string;
	nodes: Array<{
		cachegroup: string;
		parents?: Array<number> | null;
	}>;
}

/**
 * Represents a Topology as it appears in responses to requests made to the
 * Traffic Ops API to create or modify a Topology.
 */
export interface RequestTopologyResponse {
	description: string;
	readonly lastUpdated: Date;
	name: string;
	nodes: Array<{
		cachegroup: string;
		parents: Array<number> | null;
	}>;
	/**
	 * @deprecated This field is included erroneously and will be removed in the
	 * future.
	 */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	RequestedName: string;
}

/**
 * Represents a Topology as it appears in responses from the Traffic Ops API to
 * GET requests made to its `/topologies` endpoint.
 */
export interface ResponseTopology {
	description: string;
	readonly lastUpdated: Date;
	name: string;
	nodes: Array<{
		cachegroup: string;
		parents: Array<number>;
	}>;
}

/**
 * Represents in an arbitrary context a hierarchical system of groups of cache
 * servers that can be used to serve Delivery Service content.
 */
export type Topology = RequestTopology | RequestTopologyResponse | ResponseTopology;
