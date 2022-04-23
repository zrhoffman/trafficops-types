/**
 * The type of a response from the `vault/ping` endpoint of the Traffic Ops API.
 */
export interface VaultPing {
	status: string;
	server: string;
}

/**
 * The type of a response from the `vault/bucket/{{bucket}}/key/{{key}}/values`
 * endpoint of the Traffic Ops API.
 *
 * @deprecated This representation is extremely tightly coupled with the
 * deprecated Riak backend Traffic Vault provider, and has been removed from the
 * latest API version.
 */
export interface BucketValues {
	[bucket: string]: unknown;
}
