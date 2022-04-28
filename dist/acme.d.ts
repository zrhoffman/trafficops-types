export interface ACMEAccount {
    email: string;
    privateKey: string;
    provider: string;
    uri: string;
}
export interface ACMEDNSRecord {
    fqdn: string;
    record: string;
}
