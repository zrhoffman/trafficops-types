import type { Alert } from "./alert";
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
export declare function serviceAddresses(infs: Array<Interface>, exhaustive?: boolean): [ipv4Address: IPAddress | null, ipv6Address: IPAddress | null];
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
    readonly lastUpdated: Date;
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
export interface RequestServercheckExtension {
    additional_config_json?: string | null;
    description?: string | null;
    info_url: string;
    isactive: 0 | 1;
    name: string;
    servercheck_short_name: string;
    script_file: string;
    type: string;
    version: string;
}
export interface RequestServercheckExtensionResponse {
    alerts: Array<Alert>;
    supplemental: {
        readonly id: number;
    };
}
export interface ResponseServercheckExtension {
    additional_config_json: string | null;
    description: string | null;
    info_url: string;
    isactive: 0 | 1;
    name: string;
    servercheck_short_name: string;
    script_file: string;
    type: string;
    version: string;
}
export declare type ServercheckExtension = RequestServercheckExtension | ResponseServercheckExtension;
export interface ServerDetails {
    cachegroup: string;
    cdnName: string;
    deliveryservices?: [number, ...number[]];
    domainName: string;
    guid: string | null;
    hardwareInfo: unknown;
    hostName: string;
    httpsPort: number | null;
    readonly id: number;
    iloIpAddress: string;
    iloIpGateway: string;
    iloIpNetmask: string;
    iloPassword: string;
    iloUsername: string;
    interfaces: Array<Interface>;
    mgmtIpAddress: string;
    mgmtIpGateway: string;
    mgmtIpNetmask: string;
    offlineReason: string;
    physLocation: string;
    profile: string;
    profileDesc: string;
    rack: string;
    routerHostName: string;
    routerPortName: string;
    status: string;
    tcpPort: number;
    type: string;
    xmppId: string;
    xmppPasswd: string;
}
export interface ServerUpdateStatus {
    host_id: number;
    host_name: string;
    parent_pending: boolean;
    parent_reval_pending: boolean;
    reval_pending: boolean;
    status: string;
    upd_pending: boolean;
    use_reval_pending: boolean;
}
export interface ServerDeliveryServices {
    dsIds: Array<number>;
    serverId: number;
    replace: boolean;
}
