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
 * Represents a "CDN Federation" in a response to a GET made to the
 * `/cdns/{{name}}/federations` endpoint of the Traffic Ops API
 */
export interface ResponseCDNFederation {
	cname: string;
	deliveryService: {
		id: number;
		xmlId: string;
	};
	description: string;
	readonly lastUpdated: Date;
	/** In hours. */
	ttl: number;
}

/**
 * Represents a response to a "POST" request made to the
 * `/cdns/{{name}}/federations` endpoint of the Traffic Ops API to create a
 * "CDN Federation".
 */
export interface PostResponseCDNFederation {
	cname: string;
	description: string;
	readonly lastUpdated: Date;
	/** In hours. */
	ttl: number;
}

/**
 * A Request CDN Federation represents a CDN Federation as Traffic Ops requires
 * it to appear in the request to `/cdns/{{name}}/federations` that creates it.
 */
export interface RequestCDNFederation {
	cname: string;
	description: string;
	/** In hours. */
	ttl: number;
}

/** Represents a CDN Federation in an arbitrary context. */
export type CDNFederation = ResponseCDNFederation | PostResponseCDNFederation | RequestCDNFederation;

/**
 * Represents a Federation Resolver as Traffic Ops requires it to
 * appear in requests.
 */
export interface RequestFederationResolver {
	ipAddress: string;
	typeId: number;
}

/**
 * Represents a Federation Resolver as Traffic Ops presents it in
 * responses.
 */
export interface ResponseFederationResolver {
	readonly id: number;
	ipAddress: string;
	readonly lastUpdated: Date;
	type: string;
}

/**
 * Represents a Federation Resolver in an arbitrary context.
 */
export type FederationResolver = RequestFederationResolver | ResponseFederationResolver;

/**
 * A set of Federation Resolver Mapping sets associated with specific address
 * families as they appear in requests.
 */
export interface RequestFederationResolverMapping {
	resolve4?: Array<string> | null;
	resolve6?: Array<string> | null;
}

/**
 * Represents an association between a set of address-family-associated
 * Federation Resolver Mappings and a Delivery Service that is itself associated
 * with a CDN Federation that is assigned to the currently authenticated user,
 * as Traffic Ops requires it to exist in requests.
 */
export interface RequestUserDeliveryServiceFederationResolverMapping {
	/**
	 * The XMLID of the Delivery Service to which the Federation Resolver
	 * Resolvers in `mappings` are assigned.
	 */
	deliveryService: string;
	mappings: RequestFederationResolverMapping;
}

/** A CNAME value that can be used in Federation Resolver Mappings. */
export type FederationResolverMappingCNAME = `${string}.`;

/**
 * Checks if a given string is usable as a Federation Resolver Mapping CNAME
 * value.
 *
 * @param str The string to check.
 * @returns `true` if `str` is valid as a value for a CNAME in a Federation
 * Resolver Mapping, or `false` otherwise.
 */
export function isValidFederationResolverMappingCNAME(str: string): str is FederationResolverMappingCNAME {
	return /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.$/.test(str);
}

/**
 * A set of Federation Resolver Mapping sets associated with specific address
 * families as they appear in responses.
 */
export interface ResponseFederationResolverMapping extends RequestFederationResolverMapping {
	ttl: number;
	cname: FederationResolverMappingCNAME;
	resolve4?: [string, ...string[]];
	resolve6?: [string, ...string[]];
};

/**
 * Represents an association between a set of address-family-associated
 * Federation Resolver Mappings and a Delivery Service that is itself associated
 * with a CDN Federation that is assigned to the currently authenticated user,
 * as Traffic Ops presents it in responses.
 */
export interface ResponseUserDeliveryServiceFederationResolverMapping {
	/**
	 * The XMLID of the Delivery Service to which the Federation Resolver
	 * Resolvers in `mappings` are assigned.
	 */
	deliveryService: string;
	mappings: Array<ResponseFederationResolverMapping>;
}

/**
 * Represents a single Federation as exposed by the `/federations/all` endpoint
 * of the Traffic Ops API.
 */
export type AllFederation = ResponseUserDeliveryServiceFederationResolverMapping;

/**
 * Represents a request to assign a set of zero or more Delivery Services to a
 * specific CDN Federation.
 */
export interface AssignDeliveryServicesToCDNFederationRequest {
	/** @default [] */
	dsIds?: Array<number> | null;
	/** @default false */
	replace?: boolean | null;
}

/**
 * Represents a response to an
 * {@link AssignDeliveryServicesToCDNFederationRequest}.
 */
export interface AssignDeliveryServicesToCDNFederationRequestResponse {
	dsIds: Array<number> | null;
	replace: boolean | null;
}

/**
 * Represents an association between a particular CDN Federation and a single
 * Delivery Service which is assigned to it.
 */
export interface DeliveryServiceCDNFederationAssociation {
	cdn: string;
	/**
	 * The ID of the Delivery Service identified by `xmlId` - *not* the
	 * Federation.
	 */
	readonly id: number;
	/** The Name of the Type of the Delivery Service identified by `xmlId`. */
	type: string;
	xmlId: string;
}

/**
 * Represents a request to assign a particular CDN Federation to a set of zero
 * or more users.
 */
export interface AssignCDNFederationToUsersRequest {
	/** @default false */
	replace?: boolean | null;
	/** @default [] */
	userIds?: Array<number> | null;
}

/** Represents a response to an {@link AssignCDNFederationToUsersRequest}. */
export interface AssignCDNFederationToUsersRequestResponse {
	replace: boolean | null;
	userIds: Array<number> | null;
}

/**
 * Represents an association between a particular CDN Federation and a single
 * user to whom it is assigned.
 */
export interface UserCDNFederationAssociation {
	company: string | null;
	email: string;
	fullName: string;
	/**
	 * The ID of the user identified by `username` - *not* the ID of the
	 * Federation.
	 */
	readonly id: number;
	role: string;
	username: string;
}

/**
 * Represents a request to assign zero or more Federation Resolvers to a
 * Federation.
 */
export interface FederationFederationResolverAssociationRequest {
	/** @default [] */
	fedResolverIDs?: Array<number> | null;
	/** @default false */
	replace?: boolean | null;
}

/**
 * Represents Traffic Ops's response to a
 * {@link FederationFederationResolverAssociationRequest}.
 */
export interface FederationFederationResolverAssociationRequestResponse {
	/** Refer to {@link https://github.com/apache/trafficcontrol/issues/6795 #6795} */
	alerts: null;
	/** Refer to {@link https://github.com/apache/trafficcontrol/issues/6795 #6795} */
	response: {
		fedResolverIds: null | Array<number>;
		replace: boolean;
	};
}

/**
 * Represents an association between a particular Federation and a Federation
 * Resolver.
 */
export interface FederationFederationResolver {
	readonly id: number;
	ipAddress: string;
	type: string;
}
