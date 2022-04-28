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
