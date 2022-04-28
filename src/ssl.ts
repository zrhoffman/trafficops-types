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
