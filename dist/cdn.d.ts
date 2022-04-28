export interface RequestCDN {
    dnssecEnabled: boolean;
    domainName: string;
    name: string;
}
export interface ResponseCDN {
    dnssecEnabled: boolean;
    domainName: string;
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
}
export declare type CDN = RequestCDN | ResponseCDN;
export interface CDNDomain {
    domainName: string;
    profileId: number;
    parameterId: number;
    profileName: string;
    profileDescription: string;
}
