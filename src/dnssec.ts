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
