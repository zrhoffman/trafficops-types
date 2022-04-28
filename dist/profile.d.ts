export declare const enum ProfileType {
    ATS_PROFILE = "ATS_PROFILE",
    TR_PROFILE = "TR_PROFILE",
    TM_PROFILE = "TM_PROFILE",
    TS_PROFILE = "TS_PROFILE",
    TP_PROFILE = "TP_PROFILE",
    INFLUXDB_PROFILE = "INFLUXDB_PROFILE",
    RIAK_PROFILE = "RIAK_PROFILE",
    SPLUNK_PROFILE = "SPLUNK_PROFILE",
    DS_PROFILE = "DS_PROFILE",
    ORG_PROFILE = "ORG_PROFILE",
    KAFKA_PROFILE = "KAFKA_PROFILE",
    LOGSTASH_PROFILE = "LOGSTASH_PROFILE",
    ES_PROFILE = "ES_PROFILE",
    UNK_PROFILE = "UNK_PROFILE",
    GROVE_PROFILE = "GROVE_PROFILE"
}
interface ResponseProfileParameter {
    configFile: string;
    readonly id: number;
    readonly lastUpdated: null;
    name: string;
    profiles: null;
    secure: boolean;
    value: string;
}
export interface ResponseProfile {
    cdn: number;
    cdnName: string | null;
    description: string;
    id: number;
    readonly lastUpdated: Date;
    name: string;
    params?: [ResponseProfileParameter, ...ResponseProfileParameter[]];
    routingDisabled: boolean;
    type: ProfileType;
}
export interface RequestProfile {
    cdn: number;
    description: string;
    name: string;
    routingDisabled: boolean;
    type: ProfileType;
}
export declare type Profile = RequestProfile | ResponseProfile;
export interface RequestParameter {
    configFile: string;
    name: string;
    secure: boolean;
    value?: string | null;
}
export interface ResponseParameter {
    configFile: string;
    readonly id: number;
    readonly lastUpdated: Date;
    name: string;
    profiles: Array<string> | null;
    secure: boolean;
    value: string;
}
export declare type Parameter = RequestParameter | ResponseParameter;
export interface RequestParameterProfile {
    paramId: number;
    profileIds: Array<number>;
    replace?: boolean | null;
}
export interface RequestParameterProfileResponse {
    paramId: number;
    profileIds: Array<number>;
    replace: boolean;
}
export declare type ParameterProfile = RequestParameterProfile | RequestParameterProfileResponse;
export interface RequestProfileParameter {
    profileId: number;
    paramIds: Array<number>;
    replace?: boolean | null;
}
export interface RequestProfileParameterResponse {
    profileId: number;
    paramIds: Array<number>;
    replace: boolean;
}
export declare type ProfileParameter = RequestProfileParameter | RequestProfileParameterResponse;
export interface RequestProfileParameters {
    parameterId: number;
    profileId: number;
}
export interface RequestProfileParametersResponse {
    readonly lastUpdated: null;
    parameter: string | null;
    parameterId: number;
    profileId: number;
    profile: string | null;
}
export interface ResponseProfileParameters {
    readonly lastUpdated: Date;
    profile: string;
    parameter: number;
}
export declare type ProfileParameters = RequestProfileParameters | RequestProfileParametersResponse | ResponseProfileParameters;
export interface ProfileImport {
    profile: {
        cdn: string;
        description: string;
        name: string;
        type: ProfileType;
    };
    parameters: Array<{
        config_file: string;
        name: string;
        value: string;
    }>;
}
export interface ProfileExport extends ProfileImport {
    alerts: null;
}
export interface ProfileCopyResponse {
    description: string;
    idCopyFrom: number;
    id: number;
    name: string;
    profileCopyFrom: string;
}
export {};
