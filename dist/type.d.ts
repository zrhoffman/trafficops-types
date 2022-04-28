export interface TypeFromResponse {
    description: string;
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
    useInTable: string;
}
export interface RequestType {
    description: string;
    name: string;
    useInTable: string;
}
export declare type Type = TypeFromResponse | RequestType;
