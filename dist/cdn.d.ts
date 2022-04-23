export interface RequestCDN {
    dnssecEnabled: boolean;
    domainName: string;
    name: string;
}
export interface ResponseCDN {
    dnssecEnabled: boolean;
    domainName: string;
    readonly id: number;
    lastUpdated: Date;
    name: string;
}
export declare type CDN = RequestCDN | ResponseCDN;
