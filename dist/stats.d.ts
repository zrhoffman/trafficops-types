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
