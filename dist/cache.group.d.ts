export interface ResponseASN {
    asn: number;
    cachegroup: string;
    cachegroupId: number;
    readonly id: number;
    lastUpdated: Date;
}
export interface RequestASN {
    asn: number;
    cachegroupId: number;
}
export declare type ASN = RequestASN | ResponseASN;
export declare const enum LocalizationMethod {
    CZ = "CZ",
    DEEP_CZ = "DEEP_CZ",
    GEO = "GEO"
}
export declare function localizationMethodToString(l: LocalizationMethod): string;
export interface RequestCacheGroup {
    fallbacks?: Array<string> | null;
    fallbackToClosest?: boolean | null;
    latitude?: number | null;
    localizationMethods?: Array<LocalizationMethod> | null;
    longitude?: number | null;
    name: string;
    parentCacheGroupId?: number | null;
    secondaryParentId?: number | null;
    shortName: string;
    typeId: number;
}
interface ResponseCacheGroupBase {
    fallbacks: Array<string>;
    fallbackToClosest: boolean;
    readonly id: number;
    lastUpdated: Date;
    latitude: number | null;
    localizationMethods: Array<LocalizationMethod>;
    longitude: number | null;
    name: string;
    shortName: string;
    typeId: number;
    typeName: string;
}
interface ResponseCacheGroupWithParent extends ResponseCacheGroupBase {
    parentCacheGroupId: number;
    parentCacheGroupName: string;
}
interface ResponseCacheGroupWithoutParent extends ResponseCacheGroupBase {
    parentCacheGroupId: null;
    parentCacheGroupName: null;
}
interface ResponseCacheGroupWithSecondaryParent extends ResponseCacheGroupBase {
    secondaryParentId: number;
    secondaryParentName: string;
}
interface ResponseCacheGroupWithoutSecondaryParent extends ResponseCacheGroupBase {
    secondaryParentId: null;
    secondaryParentName: null;
}
declare type ResponseCacheGroupWithParentButNotSecondary = ResponseCacheGroupWithParent & ResponseCacheGroupWithoutSecondaryParent;
declare type ResponseCacheGroupWithParentAndSecondary = ResponseCacheGroupWithParent & ResponseCacheGroupWithSecondaryParent;
declare type ResponseCacheGroupWithSecondaryButNotParent = ResponseCacheGroupWithoutParent & ResponseCacheGroupWithSecondaryParent;
declare type ResponseCacheGroupWithoutParentOrSecondary = ResponseCacheGroupWithoutParent & ResponseCacheGroupWithoutSecondaryParent;
export declare type ResponseCacheGroup = ResponseCacheGroupWithParentButNotSecondary | ResponseCacheGroupWithParentAndSecondary | ResponseCacheGroupWithSecondaryButNotParent | ResponseCacheGroupWithoutParentOrSecondary;
export declare type CacheGroup = RequestCacheGroup | ResponseCacheGroup;
export {};
