export interface RequestParameter {
    configFile: string;
    name: string;
    secure: boolean;
    value: string;
}
export interface ResponseParameter {
    configFile: string;
    readonly id: number;
    lastUpdated: Date;
    name: string;
    profiles: Array<string>;
    secure: boolean;
    value: string;
}
export declare type Parameter = RequestParameter | ResponseParameter;
