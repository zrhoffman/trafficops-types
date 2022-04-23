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
    id: number;
    lastUpdated: null;
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
    lastUpdated: Date;
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
export {};
