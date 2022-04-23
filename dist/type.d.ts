export interface TypeFromResponse {
    description: string;
    id: number;
    lastUpdated: Date;
    name: string;
    useInTable: string;
}
export interface RequestType {
    description: string;
    name: string;
    useInTable: string;
}
export declare type Type = TypeFromResponse | RequestType;
