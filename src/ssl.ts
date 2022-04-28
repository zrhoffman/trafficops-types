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
 * Represents the SSL Keys for a Delivery Service within a CDN as presented by
 * Traffic Ops in its responses to requests made to its
 * `/cdns/name/{{name}}/sslkeys` API endpoint.
 */
export interface CDNDeliveryServiceSSLKeys {
	certificate: {
		crt: string;
		key: string;
	};
	deliveryservice: string;
}

/** Represents an SSL Key uploaded for a Delivery Service. */
export interface DeliveryServiceSSLKeyUpload {
	authType?: string | null;
	cdn: string;
	certificate: {
		/** Certificate */
		crt: string;
		/** Certificate Signing Request */
		csr: string;
		/** Private SSL Key */
		key: string;
	};
	deliveryservice: string;
	hostname: string;
	/**
	 * The XMLID of the Delivery Service that will use/is using this SSL
	 * certificate/key pair.
	 */
	key: string;
	version: string;
}

/**
 * Represents a request to have Traffic Ops generate an SSL Key/Certificate pair
 * for a Delivery Service.
 */
export interface DeliveryServiceSSLKeyGenerationRequest {
	businessUnit?: string | null;
	cdn: string;
	city?: string | null;
	country?: string | null;
	deliveryservice: string;
	hostname: string;
	/**
	 * The XMLID of the Delivery Service for which an SSL Key/Certificate pair
	 * will be generated.
	 */
	key: string;
	organization?: string | null;
	state?: string | null;
	version: string;
}

/**
 * Represents a request to have Traffic Ops generate an SSL Key/Certificate pair
 * for a Delivery Service using LetsEncrypt (or another configured ACME
 * service).
 */
export interface LetsEncryptDeliveryServiceSSLKeyGenerationRequest {
	cdn: string;
	deliveryservice: string;
	hostname: string;
	key: string;
	version: string;
}

/**
 * Represents a Delivery Service's SSL Key/Certificate pair as presented by
 * Traffic Ops in responses.
 */
export interface ResponseDeliveryServiceSSLKey {
	certificate: {
		crt: string;
		key: string;
		csr: string;
	};
	deliveryservice: string;
	cdn: string;
	businessUnit?: string;
	city?: string;
	organization?: string;
	hostname?: string;
	country?: string;
	state?: string;
	version: string;
	expiration: Date;
}
