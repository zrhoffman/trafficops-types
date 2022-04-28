export interface CacheStatsSeries {
    columns: ["time", "sum_count"];
    count: number;
    name: `${"bandwidth" | "connections" | "maxkbps"}.cdn.1min`;
    values: Array<[Date, number | null]>;
}
export interface CacheStatsSummary {
    average: number;
    count: number;
    fifthPercentile: number;
    max: number;
    min: number;
    ninetyEightPercentile: number;
    ninetyFifthPercentile: number;
}
export interface CacheStats {
    series?: CacheStatsSeries;
    summary?: CacheStatsSummary;
}
export interface CurrentStats {
    currentStats: [
        ...Array<{
            bandwidth: number | null;
            capacity: number | null;
            cdn: string;
            connections: number | null;
        }>,
        {
            bandwidth: number | null;
            cdn: "total";
            connections: number | null;
        }
    ];
}
export interface CachesStats {
    cachegroup: string;
    connections: number;
    healthy: boolean;
    hostname: string;
    ip: string | null;
    kbps: number;
    profile: string;
    status: string;
}
export interface Health {
    cacheGroups: Array<{
        name: string;
        offline: number;
        online: number;
    }>;
    totalOffline: number;
    totalOnline: number;
}
export interface Capacity {
    readonly availablePercent: number;
    readonly maintenancePercent: number;
    readonly unavailablePercent: number;
    readonly utilizedPercent: number;
}
export interface CDNDNSSECKSKKeyGenerationRequest {
    effectiveDate?: Date | null;
    expirationDays: number;
}
export interface Routing {
    cz: number;
    deepCz: number;
    dsr: number;
    err: number;
    fed: number;
    geo: number;
    miss: number;
    regionalAlternate: number;
    regionalDenied: number;
    staticRoute: number;
}
export interface RequestStatsSummary {
    cdnName?: string | null;
    deliveryServiceName?: string | null;
    statName: string;
    statValue: number;
    summaryTime: Date;
    statDate?: `${number}-${number}-${number}` | Date | null;
}
export interface ResponseStatsSummary {
    cdnName: string;
    deliveryServiceName: string;
    summaryTime: Date;
    statDate: `${number}-${number}-${number}` | null;
    statValue: number;
}
export declare type StatsSummary = RequestStatsSummary | ResponseStatsSummary;
export declare function isValidStatDate(statDate: string): statDate is `${number}-${number}-${number}`;
