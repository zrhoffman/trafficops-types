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
 * Represents a request to generate DNSSEC Keys for a CDN.
 */
export interface CDNDNSSECKeyGenerationRequest {
	/** @default Date.now() */
	effectiveDate?: Date | null;
	/**
	 * This is actually the name of the CDN for which keys will be generated.
	 */
	key: string;
	kskExpirationDays: number;
	/** In seconds. */
	ttl: number;
	zskExpirationDays: number;
}

/**
 * Represents a request to generate a Key-Signing-Key (for DNSSEC) for a CDN.
 */
export interface CDNKSKGenerationRequest {
	/** @default Date.now() */
	effectiveDate?: Date | null;
	expirationDays: number;
}

/** CDNDNSSECKeys represents the DNSSEC Keys for a single CDN. */
export interface CDNDNSSECKeys {
	ksk: {
		expirationDate: Date;
		dsRecord?: {
			algorithm: string;
			digest: string;
			digestType: string;
		};
		inceptionDate: Date;
		name: string;
		private: string;
		public: string;
		ttl: number;
	};
	zsk: {
		expirationDate: Date;
		inceptionDate: Date;
		name: string;
		private: string;
		public: string;
		ttl: number;
	};
}
