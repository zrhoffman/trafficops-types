export interface RequestDivision {
    name: string;
}
export interface ResponseDivision {
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
}
export declare type Division = RequestDivision | ResponseDivision;
export interface RequestRegion {
    division: number;
    name: string;
}
export interface ResponseRegion {
    division: number;
    divisionName: string;
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
}
export declare type Region = RequestRegion | ResponseRegion;
