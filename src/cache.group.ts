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

/** Represents an ASN in an API response. */
export interface ResponseASN {
	asn: number;
	cachegroup: string;
	cachegroupId: number;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
}

/** Represents an ASN in an API request. */
export interface RequestASN {
	asn: number;
	cachegroupId: number;
}

/** Represents, generically, an ASN in the context of a request or response. */
export type ASN = RequestASN | ResponseASN;

/**
 * LocalizationMethod values are those allowed in the 'localizationMethods' of
 * `CacheGroup`s.
 */
export const enum LocalizationMethod {
	/** Coverage Zone file lookup. */
	CZ = "CZ",
	/** Deep Coverage Zone file lookup. */
	DEEP_CZ = "DEEP_CZ",
	/** Geographic database search. */
	GEO = "GEO"
}

/**
 * Converts a LocalizationMethod to a human-readable string.
 *
 * @param l The LocalizationMethod to convert.
 * @returns A textual representation of 'l'.
 */
export function localizationMethodToString(l: LocalizationMethod): string {
	switch (l) {
		case LocalizationMethod.CZ:
			return "Coverage Zone File";
		case LocalizationMethod.DEEP_CZ:
			return "Deep Coverage Zone File";
		case LocalizationMethod.GEO:
			return "Geo-IP Database";
	}
}

/**
 * Represents a Cache Group as required by the Traffic Ops API in requests.
 */
export interface RequestCacheGroup {
	fallbacks?: Array<string> | null;
	fallbackToClosest?: boolean | null;
	/**
	 * Note that leaving latitude and longitude null or undefined **will break
	 * things**.
	 *
	 * See https://github.com/apache/trafficcontrol/issues/6378
	 */
	latitude?: number | null;
	localizationMethods?: Array<LocalizationMethod> | null;
	/**
	 * Note that leaving latitude and longitude null or undefined **will break
	 * things**.
	 *
	 * See https://github.com/apache/trafficcontrol/issues/6378
	 */
	longitude?: number | null;
	name: string;
	parentCacheGroupId?: number | null;
	secondaryParentId?: number | null;
	shortName: string;
	typeId: number;
}

/**
 * The basic properties common to Cache Groups in all responses.
 */
interface ResponseCacheGroupBase {
	fallbacks: Array<string>;
	fallbackToClosest: boolean;
	readonly id: number;
	readonly lastUpdated: Date;
	latitude: number | null;
	localizationMethods: Array<LocalizationMethod>;
	longitude: number | null;
	name: string;
	shortName: string;
	typeId: number;
	typeName: string;
}

/**
 * A Cache Group with a parent. All related fields are guaranteed to be
 * non-null.
 */
interface ResponseCacheGroupWithParent extends ResponseCacheGroupBase {
	parentCacheGroupId: number;
	parentCacheGroupName: string;
}

/**
 * A Cache Group with no parent. All related fields are guaranteed to be null.
 */
interface ResponseCacheGroupWithoutParent extends ResponseCacheGroupBase {
	parentCacheGroupId: null;
	parentCacheGroupName: null;
}

/**
 * A Cache Group with a secondary parent. All related fields are guaranteed to
 * be non-null.
 */
interface ResponseCacheGroupWithSecondaryParent extends ResponseCacheGroupBase {
	secondaryParentId: number;
	secondaryParentName: string;
}

/**
 * A Cache Group without a secondary parent. All related fields are guaranteed
 * to be null.
 */
interface ResponseCacheGroupWithoutSecondaryParent extends ResponseCacheGroupBase {
	secondaryParentId: null;
	secondaryParentName: null;
}

/** A Cache Group with a parent but no secondary parent. */
type ResponseCacheGroupWithParentButNotSecondary = ResponseCacheGroupWithParent & ResponseCacheGroupWithoutSecondaryParent;
/** A Cache Group with both a parent and a secondary parent. */
type ResponseCacheGroupWithParentAndSecondary = ResponseCacheGroupWithParent & ResponseCacheGroupWithSecondaryParent;
/** A Cache Group with a secondary parent but no parent. */
type ResponseCacheGroupWithSecondaryButNotParent = ResponseCacheGroupWithoutParent & ResponseCacheGroupWithSecondaryParent;
/** A Cache Group with neither a parent nor a secondary parent. */
type ResponseCacheGroupWithoutParentOrSecondary = ResponseCacheGroupWithoutParent & ResponseCacheGroupWithoutSecondaryParent;

/**
 * Represents a Cache Group as returned by the Traffic Ops API in responses.
 */
export type ResponseCacheGroup = ResponseCacheGroupWithParentButNotSecondary |
ResponseCacheGroupWithParentAndSecondary |
ResponseCacheGroupWithSecondaryButNotParent |
ResponseCacheGroupWithoutParentOrSecondary;

/**
 * Represents a Cache Group.
 *
 * Refer to https://traffic-control-cdn.readthedocs.io/en/latest/overview/cache_groups.html
 */
export type CacheGroup = RequestCacheGroup | ResponseCacheGroup;

/**
 * ResponseCacheGroupParameters represents a response from Traffic Ops to a
 * request made to its /cachegroupparameters` API endpoint.
 *
 * @deprecated In the latest API version, there is no notion of associating a
 * Parameter with a Cache Group.
 */
export interface ResponseCacheGroupParameters {
	cachegroupParameters: Array<{
		parameter: number;
		readonly lastUpdated: Date;
		/** The Name of the Cache Group associated with this Parameter. */
		cachegroup: string;
	}>;
}

/**
 * RequestCacheGroupParameter represents an association between a Cache Group
 * and a Parameter as Traffic Ops requires it in requests to its API. Note that
 * the `/cachegroupparameters` endpoint allows the request body to either be
 * one of these structures, or an array thereof.
 *
 * This is also the type of a response from Traffic Ops to the request that
 * passed this structure for the purposes of creating an association between a
 * Parameter and a Cache Group.
 *
 * @deprecated In the latest API version, there is no notion of associating a
 * Parameter with a Cache Group.
 */
export interface RequestCacheGroupParameter {
	cacheGroupId: number;
	parameterId: number;
}

/**
 * Represents a request to assign servers within a Cache Group to a specified
 * set of Delivery Services.
 */
export interface CacheGroupDeliveryServiceAssignmentRequest {
	deliveryServices: Array<number>;
}

/**
 * Represents a response from the Traffic Ops API to a request to associate the
 * servers of a Cache Group with a set of Delivery Services.
 */
export interface CacheGroupDeliveryServiceAssignmentResponse {
	deliveryServices: Array<number>;
	readonly id: number;
	serverNames: Array<string>;
}
