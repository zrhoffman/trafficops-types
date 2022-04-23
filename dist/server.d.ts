export interface IPAddress {
    address: string;
    gateway: string | null;
    serviceAddress: boolean;
}
export interface Interface {
    ipAddresses: Array<IPAddress>;
    maxBandwidth: number | null;
    monitor: boolean;
    mtu: number | null;
    name: string;
}
export declare function serviceAddresses(inf: Interface | Array<IPAddress>, exhaustive?: boolean): [ipv4Address: IPAddress | null, ipv6Address: IPAddress | null];
export interface ResponseServer {
    cachegroup: string;
    cachegroupId: number;
    cdnId: number;
    cdnName: string;
    domainName: string;
    guid: number | null;
    hostName: string;
    httpsPort: number | null;
    readonly id: number;
    iloIpAddress: string | null;
    iloIpGateway: string | null;
    iloIpNetmask: string | null;
    iloPassword: string | null;
    iloUsername: string | null;
    interfaces: Array<Interface>;
    lastUpdated: Date;
    mgmtIpAddress: string | null;
    mgmtIpGateway: string | null;
    mgmtIpNetmask: string | null;
    offlineReason: string | null;
    physLocation: string;
    physLocationId: number;
    profile: string;
    profileDesc: string;
    profileId: number;
    revalPending: boolean;
    rack: string | null;
    routerHostName: string | null;
    routerPortName: string | null;
    status: string;
    statusId: number;
    statusLastUpdated: Date | null;
    tcpPort: number | null;
    type: string;
    typeId: number;
    updPending: boolean;
    readonly xmppId: string;
    xmppPasswd?: string | null;
}
export interface Servercheck {
    adminState: string;
    cacheGroup: string;
    checks?: Record<string, number>;
    hostName: string;
    id: number;
    profile: string;
    revalPending: boolean;
    type: string;
    updPending: boolean;
}
export declare function checkMap(srv: Servercheck): Map<string, number | boolean>;
