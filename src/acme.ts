/**
 * ACMEAccount represents an ACME account as required by and given in requests
 * to and responses from /acme_accounts.
 */
export interface ACMEAccount {
	email: string;
	privateKey: string;
	provider: string;
	uri: string;
}

/**
 * Represents a single DNS record used for completing ACME challenges.
 */
export interface ACMEDNSRecord {
	fqdn: string;
	record: string;
}
