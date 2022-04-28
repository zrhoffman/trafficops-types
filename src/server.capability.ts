/** Represents a request to create or modify a Server Capability. */
export interface RequestServerCapability {
	name: string;
}

/**
 * Represents a Server Capability as it is presented by Traffic Ops in responses
 * to requests made to its API to create or modify Server Capabilities.
 */
export interface RequestServerCapabilityResponse {
	readonly lastUpdated: Date;
	name: string;
	/**
	 * @deprecated This field exists erroneously and will probably be removed at
	 * some point.
	 */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	RequestedName: string;
}

/**
 * Represents a Server Capability as it appears in responses from Traffic Ops to
 * GET requests made to its `/server_capabilities` API endpoint.
 */
export interface ResponseServerCapability {
	readonly lastUpdated: Date;
	name: string;
}

/**
 * Represents in an arbitrary context the ability of a Server to perform some
 * function.
 */
export type ServerCapability = RequestServerCapability | RequestServerCapabilityResponse | ResponseServerCapability;

/**
 * Represents a request to associate the requirement of a Server Capability with
 * a Delivery Service.
 */
export interface RequestDeliveryServiceRequiredCapability {
	deliveryServiceID: number;
	requiredCapability: string;
}

/**
 * Represents a response from Traffic Ops to a request to associate the
 * requirement of a Server Capability with a Delivery Service.
 */
export interface RequestDeliveryServiceRequiredCapabilityResponse {
	deliveryServiceID: number;
	readonly lastUpdated: Date;
	requiredCapability: string;
}

/**
 * Represents the requirement of a Delivery Service that its assigned servers
 * have a given Server Capability as they appear in responses to GET requests
 * made to `/deliveryservices_required_capabilities`.
 */
export interface ResponseDeliveryServiceRequiredCapability {
	deliveryServiceID: number;
	readonly lastUpdated: Date;
	requiredCapability: string;
	xmlID: string;
}

/**
 * Represents in an arbitrary context the requirement of a Delivery Service that
 * cache servers responsible for serving its content have the ability to perform
 * some special function defined by a Server Capability.
 */
export type DeliveryServiceRequiredCapability = RequestDeliveryServiceRequiredCapability | RequestDeliveryServiceRequiredCapabilityResponse | ResponseDeliveryServiceRequiredCapability;

/**
 * Represents a request to associate a cache server with some Server Capability
 * it ostensibly possesses.
 */
export interface RequestServerServerCapability {
	serverCapability: string;
	serverID: number;
}

/**
 * Represents a response from Traffic Ops to a request to associate a Server
 * Capability with a cache server.
 */
export interface RequestServerServerCapabilityResponse {
	readonly lastUpdated: Date;
	serverCapability: string;
	serverId: number;
}

/**
 * Represents an association between a cache server and a Server Capability
 * which it ostensibly possesses as such associations appear in responses to GET
 * requests made to the `/server_server_capabilities` endpoint of the Traffic
 * Ops API.
 */
export interface ResponseServerServerCapability {
	readonly lastUpdated: Date;
	serverCapability: string;
	serverHostName: string;
	serverId: number;
}

/**
 * Represents in an arbitrary context the association between a cache server and
 * a Server Capability it ostensibly possesses.
 */
export type ServerServerCapability = RequestServerServerCapability | RequestServerServerCapabilityResponse | ResponseServerServerCapability;
