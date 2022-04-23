export declare const enum JobType {
    PURGE = "PURGE"
}
export interface ResponseInvalidationJob {
    assetURL: string;
    createdBy: string;
    deliveryService: string;
    readonly id: number;
    keyword: JobType;
    parameters: string;
    startTime: Date;
}
export interface RequestInvalidationJob {
    deliveryService: number | string;
    startTime: Date | string;
    regex: string;
    ttl: number | string;
}
export declare type InvalidationJob = RequestInvalidationJob | ResponseInvalidationJob;
