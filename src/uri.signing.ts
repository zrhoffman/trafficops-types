/** Represents the URL-signing keys of a Delivery Service. */
export type DSURLKeys = Record<`key${number}`, string>;

/** Represents the URI-signature keys of a Delivery Service. */
export interface DSURISignatureKeys {
	[issuer: string]: {
		keys: Array<{
			alg: string;
			kid: string;
			kty: string;
			k: string;
		}>;
		// eslint-disable-next-line @typescript-eslint/naming-convention
		renewal_kid: string;
	};
};
