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
 * Represents a CDN as required by the Traffic Ops API in requests.
 */
export interface RequestCDN {
	/** Whether or not DNSSEC is enabled within this CDN. */
	dnssecEnabled: boolean;
	/** The Top-Level Domain within which the CDN operates. */
	domainName:    string;
	/** The name of the CDN. */
	name:          string;
}

/**
 * Represents a CDN as returned by the Traffic Ops API in responses.
 */
export interface ResponseCDN {
	dnssecEnabled: boolean;
	domainName: string;
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Represents a CDN. */
export type CDN = RequestCDN | ResponseCDN;

/**
 * Represents an association between a CDN's DNS domain and the Profile of the
 * Traffic Router(s) that service it.
 */
export interface CDNDomain {
	domainName: string;
	profileId: number;
	parameterId: number;
	profileName: string;
	profileDescription: string;
}
