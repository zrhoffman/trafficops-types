export interface ResponseStatus {
    description: string | null;
    id: number;
    readonly lastUpdated: Date;
    name: string;
}
export interface RequestStatus {
    description?: string | null;
    name: string;
}
export declare type Status = ResponseStatus | RequestStatus;
export interface StatusChangeRequest {
    offlineReason?: string | null;
    status: string;
}
