interface ISOFields {
    disk: string;
    domainName: string;
    hostName: string;
    interfaceMtu: number;
    interfaceName?: string | null;
    ip6Address?: string | null;
    ip6Gateway?: string | null;
    osVersionsDir: string;
    rootPass: string;
}
interface ISORequestDHCP extends ISOFields {
    dhcp: "no";
    ipAddress: string;
    ipGateway: string;
    ipNetmask: string;
}
interface ISORequestNonDHCP extends ISOFields {
    dhcp: "yes";
}
export declare type ISORequest = ISORequestDHCP | ISORequestNonDHCP;
export interface OSVersions {
    [osversion: string]: string;
}
export {};
