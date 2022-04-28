export interface ResponsePhysicalLocation {
    address: string;
    city: string;
    comments: string | null;
    email: string | null;
    id: number;
    readonly lastUpdated: Date;
    name: string;
    phone: string | null;
    poc: string | null;
    region: string | null;
    regionId: number;
    shortName: string;
    state: string;
    zip: string;
}
export interface RequestPhysicalLocation {
    address: string;
    city: string;
    comments?: string | null;
    email?: string | null;
    name: string;
    phone?: string | null;
    poc?: string | null;
    regionId: number;
    state: string;
    zip: string;
}
export declare type PhysicalLocation = ResponsePhysicalLocation | RequestPhysicalLocation;
