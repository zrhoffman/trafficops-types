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
 * Represents an Origin in the context of a request body.
 */
export interface RequestOrigin {
	/** @default null */
	cachegroupId?: number | null;
	/** @default null */
	coordinateId?: number | null;
	deliveryServiceId: number;
	fqdn: string;
	/** @default null */
	ip6Address?: string | null;
	/** @default null */
	ipAddress?: string | null;
	/** @default false */
	isPrimary?: boolean | null;
	name: string;
	/** @default null */
	port?: number | null;
	protocol: "http" | "https";
	/** @default null */
	profileId?: number | null;
	tenantID: number;
}

/**
 * Represents an Origin as Traffic Ops presets in in responses to requests
 * containing {@link RequestOrigin}s.
 */
export interface RequestOriginResponse {
	cachegroup: string | null;
	cachegroupId: number | null;
	coordinate: string | null;
	coordinateId: number | null;
	deliveryService: string | null;
	deliveryServiceId: number;
	fqdn: string;
	readonly id: number;
	ip6Address: string | null;
	ipAddress: string | null;
	isPrimary: boolean | null;
	readonly lastUpdated: Date;
	name: string;
	port: number | null;
	protocol: "http" | "https";
	profile: string | null;
	profileId: number | null;
	tenant: string | null;
	/**
	 * Refer to
	 * {@link https://github.com/apache/trafficcontrol/issues/6796 #6796}
	 */
	tenantId: number;
}

/**
 * The basic set of properties common to all Origins in responses.
 */
interface ResponseOriginBase {
	deliveryService: string;
	deliveryServiceId: number;
	fqdn: string;
	readonly id: number;
	ip6Address: string | null;
	ipAddress: string | null;
	isPrimary: boolean;
	readonly lastUpdated: Date;
	name: string;
	port: number | null;
	protocol: "http" | "https";
	tenant: string;
	/**
	 * Refer to
	 * {@link https://github.com/apache/trafficcontrol/issues/6796 #6796}
	 */
	 tenantId: number;
}

/**
 * An Origin with a Cache Group - both related fields are known to be non-null.
 */
interface ResponseOriginWithCacheGroup extends ResponseOriginBase {
	cachegroup: string;
	cachegroupId: number;
}

/**
 * An Origin without a Cache Group - both related fields are known to be null.
 */
interface ResponseOriginWithoutCacheGroup extends ResponseOriginBase {
	cachegroup: null;
	cachegroupId: null;
}

/**
 * An Origin with a Profile - both related fields are known to be non-null.
 */
interface ResponseOriginWithProfile extends ResponseOriginBase {
	profile: string;
	profileId: number;
}

/**
 * An Origin without a Profile - both related fields are known to be null.
 */
interface ResponseOriginWithoutProfile extends ResponseOriginBase {
	profile: null;
	profileId: null;
}

/**
 * An Origin with a Coordinate - both related fields are known to be non-null.
 */
interface ResponseOriginWithCoordinate extends ResponseOriginBase {
	coordinate: string;
	coordinateId: number;
}

/**
 * An Origin without a Coordinate - both related fields are known to be null.
 */
interface ResponseOriginWithoutCoordinate extends ResponseOriginBase {
	coordinate: null;
	coordinateId: null;
}

/**
 * Represents an Origin of content as presented by Traffic Ops in (most)
 * responses.
 */
export type ResponseOrigin = (ResponseOriginWithCacheGroup & ResponseOriginWithProfile & ResponseOriginWithCoordinate) |
(ResponseOriginWithCacheGroup & ResponseOriginWithoutProfile & ResponseOriginWithCoordinate) |
(ResponseOriginWithoutCacheGroup & ResponseOriginWithProfile & ResponseOriginWithCoordinate) |
(ResponseOriginWithoutCacheGroup & ResponseOriginWithoutProfile & ResponseOriginWithCoordinate) |
(ResponseOriginWithCacheGroup & ResponseOriginWithProfile & ResponseOriginWithoutCoordinate) |
(ResponseOriginWithCacheGroup & ResponseOriginWithoutProfile & ResponseOriginWithoutCoordinate) |
(ResponseOriginWithoutCacheGroup & ResponseOriginWithProfile & ResponseOriginWithoutCoordinate) |
(ResponseOriginWithoutCacheGroup & ResponseOriginWithoutProfile & ResponseOriginWithoutCoordinate);

/**
 * An Origin is a source of content to be delivered by a CDN to requesting
 * clients.
 */
export type Origin = ResponseOrigin | RequestOrigin | RequestOriginResponse;
