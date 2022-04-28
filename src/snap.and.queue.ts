import type { LocalizationMethod } from "./cache.group";
import type { Interface } from "./server";

/**
 * The basic set of properties common to all requests to (de)queue updates on a
 * Cache Group.
 */
interface CacheGroupQueueRequestBase {
	action: "queue" | "dequeue";
}

/**
 * A request to queue updates on a Cache Group, identifying the CDN to which to
 * restrict the operation by its ID. Specifying the Name is not allowed.
 */
interface CacheGroupQueueRequestByCDNID extends CacheGroupQueueRequestBase{
	cdn?: never;
	cdnId: number;
}

/**
 * A request to queue updates on a Cache Group, identifying the CDN to which to
 * restrict the operation by its Name. Specifying the ID is not allowed.
 */
interface CacheGroupQueueRequestByCDNName extends CacheGroupQueueRequestBase {
	cdn: string;
	cdnId?: never;
}

/** Represents a request to queue updates on a Cache Group. */
export type CacheGroupQueueRequest = CacheGroupQueueRequestByCDNID | CacheGroupQueueRequestByCDNName;

/**
 * Represents a response from the Traffic Ops API to a request to queue updates
 * on a Cache Group.
 */
export interface CacheGroupQueueResponse {
	action: "queue" | "dequeue";
	cachegroupName: string;
	cachegroupID: number;
	cdn: string;
	serverNames: Array<string>;
}

/** Represents a request to (de)queue updates on a CDN. */
export interface CDNQueueRequest {
	action: "queue" | "dequeue";
}

/**
 * Represents a response from Traffic Ops to a request made to its API to
 * (de)queue updates on a CDN.
 */
export interface CDNQueueResponse {
	action: "queue" | "dequeue";
	cdnId: number;
}

/**
 * Represents a request to (de)queue updates on a Server.
 */
export interface ServerQueueRequest {
	action: "queue" | "dequeue";
}

/**
 * Represents a response from Traffic Ops to a request made to its API to
 * (de)queue updates on a server.
 */
export interface ServerQueueResponse {
	action: "queue" | "dequeue";
	serverId: number;
}

/**
 * Represents a request to (de)queue updates on a Topology.
 */
export type TopologyQueueRequest = CacheGroupQueueRequestByCDNID;

/**
 * A response to a {@link TopologyQueueRequest}.
 */
export interface TopologyQueueResponse extends TopologyQueueRequest {
	topology: string;
}

/** The basic properties common to all of a Snapshot's "contentServers" */
interface ContentServerBase {
	cacheGroup: string;
	capabilities: Array<string>;
	fqdn: string;
	hashCount: number;
	hashId: string;
	httpsPort: number | null;
	interfaceName: string;
	ip: string;
	ip6: string;
	locationId: string;
	port: number;
	profile: string;
	routingDisabled: 0 | 1;
	status: string;
}

/** An edge-tier Snapshot "contentServer". */
interface EdgeContentServer extends ContentServerBase {
	deliveryServices: {
		[xmlID: string]: Array<string>;
	};
	type: "EDGE";
}

/** A mid-tier Snapshot "contentServer". */
interface MidContentServer extends ContentServerBase {
	type: "MID";
}

/**
 * Represents a CDN Snapshot.
 *
 * Note that this structure is highly volatile, and in general isn't bound by
 * the normal rules of API versioning.
 */
export interface Snapshot {
	config: Record<string, unknown>;
	contentRouters: {
		[routerHostName: string]: {
			"api.port": string;
			"secure.api.port": string;
			fqdn: string;
			httpsPort: number | null;
			ip: string;
			ip6: string;
			location: string;
			port: number;
			profile: string;
			status: string;
		};
	};
	contentServers: {
		[cacheServerHostName: string]: EdgeContentServer | MidContentServer;
	};
	deliveryServices: {
		[xmlID: string]: {
			anonymousBlockingEnabled: "true" | "false";
			consistentHashQueryParameters: Array<string>;
			consistentHashRegex?: string;
			coverageZoneOnly: "true" | "false";
			deepCachingType: "ALWAYS" | "NEVER";
			dispersion: {
				limit: number;
				shuffled: "true" | "false";
			};
			domains: Array<string>;
			ecsEnabled: "true" | "false";
			geolocationProvider: string;
			ip6RoutingEnabled: "true" | "false";
			matchsets: Array<{
				matchList: Array<{
					"match-type": string;
					regex: string;
				}>;
				protocol: string;
			}>;
			missLocation: {
				lat: number;
				long: number;
			};
			protocol: {
				acceptHttps: "true" | "false";
				redirectToHttps: "true" | "false";
			};
			regionalGeoBlocking: "true" | "false";
			requiredCapabilities: Array<string>;
			routingName: string;
			soa: {
				admin: string;
				expire: string;
				minimum: string;
				refresh: string;
				retry: string;
			};
			sslEnabled: "true" | "false";
			topology?: string;
			ttls: {
				/* eslint-disable @typescript-eslint/naming-convention */
				A: string;
				AAAA: string;
				NS: string;
				SOA: string;
				/* eslint-enable @typescript-eslint/naming-convention */
			};
		};
	};
	edgeLocations: {
		[name: string]: {
			backupLocations: {
				fallbackToClosest: "true" | "false";
				list?: Array<string>;
			};
			latitude: number;
			longitude: number;
			localizationMethods: Array<LocalizationMethod>;
		};
	};
	monitors: {
		[monitorHostName: string]: {
			fqdn: string;
			httpsPort: number | null;
			ip: string;
			ip6: string;
			location: string;
			port: number;
			profile: string;
			status: string;
		};
	};
	stats: {
		/* eslint-disable @typescript-eslint/naming-convention */
		CDN_name: string;
		date: Date;
		tm_host: string;
		tm_path: string;
		tm_user: string;
		tm_version: string;
		/* eslint-enable @typescript-eslint/naming-convention */
	};
	topologies?: {
		[name: string]: {
			nodes: Array<string>;
		};
	};
	trafficRouterLocations: {
		[name: string]: {
			backupLocations: {
				fallbackToClosest: "true" | "false";
				list?: Array<string>;
			};
			latitude: number;
			localizationMethods: Array<LocalizationMethod>;
			longitude: number;
		};
	};
}

/**
 * Represents a CDN "Monitoring Snapshot".
 *
 * Note that this structure is highly volatile, and in general isn't bound by
 * the normal rules of API versioning.
 */
export interface MonitoringConfig {
	cacheGroups: Array<{
		coordinates: {
			latitude: number;
			longitude: number;
		};
		name: string;
	}>;
	config: Record<string, number | string | boolean>;
	deliveryServices: Array<{
		hostRegexes: Array<string>;
		status: string;
		topology: string | null;
		totalKbpsThreshold: number;
		totalTpsThreshold: number;
		type: string;
		xmlId: string;
	}>;
	profiles: Array<{
		name: string;
		parameters: Record<string, string | number | boolean>;
		type: string;
	}>;
	topologies?: {
		[name: string]: {
			nodes: Array<string>;
		};
	};
	trafficMonitors: Array<{
		cachegroup: string;
		fqdn: string;
		hostname: string;
		ip: string;
		ip6: string;
		port: number;
		profile: string;
		status: string;
	}>;
	trafficServers: Array<{
		cachegroup: string;
		fqdn: string;
		hashid: string;
		hostname: string;
		interfaces: Array<Interface>;
		port: number;
		profile: string;
		status: string;
		type: string;
	}>;
}
