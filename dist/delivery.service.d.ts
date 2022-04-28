export declare const enum GeoLimit {
    NONE = 0,
    CZF_ONLY = 1,
    CZF_AND_COUNTRY_CODES = 2
}
export declare const enum GeoProvider {
    MAX_MIND = 0,
    NEUSTAR = 1
}
export interface DeliveryServiceMatch {
    pattern: string;
    setNumber: number;
    type: string;
}
export declare const enum Protocol {
    HTTP = 0,
    HTTPS = 1,
    HTTP_AND_HTTPS = 2,
    HTTP_TO_HTTPS = 3
}
export declare function protocolToString(p: Protocol): string;
export declare const enum QStringHandling {
    USE = 0,
    IGNORE = 1,
    DROP = 2
}
export declare function qStringHandlingToString(q: QStringHandling): string;
export declare const enum RangeRequestHandling {
    NONE = 0,
    BACKGROUND_FETCH = 1,
    CACHE_RANGE_REQUESTS = 2
}
export declare function rangeRequestHandlingToString(r: RangeRequestHandling): string;
interface RequestDeliveryServiceBase {
    active: boolean;
    anonymousBlockingEnabled?: number | null;
    cacheurl: string | null;
    ccrDnsTtl?: number | null;
    cdnId: number;
    checkPath?: string | null;
    consistentHashQueryParams?: Array<string> | null;
    consistentHashRegex?: string | null;
    deepCachingType?: "ALWAYS" | "NEVER" | null;
    displayName: string;
    dnsBypassCname?: string | null;
    dnsBypassIp?: string | null;
    dnsBypassIp6?: string | null;
    dnsBypassTtl?: string | null;
    dscp: number;
    ecsEnabled?: boolean | null;
    edgeHeaderRewrite?: string | null;
    firstHeaderRewrite?: string | null;
    fqPacingRate?: number | null;
    geoLimit: GeoLimit;
    geoLimitCountries?: string | null;
    geoLimitRedirectUrl?: string | null;
    geoProvider: GeoProvider;
    globalMaxMbps?: number | null;
    globalMaxTps?: number | null;
    httpBypassFqdn: string | null;
    infoUrl: string | null;
    initialDispersion?: number | null;
    innerHeaderRewrite?: string | null;
    ipv6RoutingEnabled?: boolean | null;
    lastHeaderRewrite?: string | null;
    logsEnabled: boolean;
    longDesc?: string | null;
    longDesc1?: string | null;
    longDesc2?: string | null;
    maxDnsAnswers?: number | null;
    maxOriginConnections?: number | null;
    maxRequestHeaderBytes?: number | null;
    midHeaderRewrite?: string | null;
    missLat?: number | null;
    missLong?: number | null;
    multiSiteOrigin?: boolean | null;
    orgServerFqdn?: string | null;
    originShield?: string | null;
    profileId?: number | null;
    protocol?: Protocol | null;
    qstringIgnore?: QStringHandling | null;
    rangeRequestHandling?: RangeRequestHandling | null;
    rangeSliceBlockSize?: null | number;
    regexRemap?: string | null;
    regionalGeoBlocking: boolean;
    remapText: string | null;
    routingName?: string | null;
    serviceCategory?: string | null;
    signed?: boolean | null;
    signingAlgorithm?: "url_sig" | "uri_signing" | null;
    sslKeyVersion?: number | null;
    tenantId: number;
    topology?: string | null;
    trRequestHeaders?: string | null;
    trResponseHeaders?: string | null;
    typeId: number;
    xmlId: string;
}
export interface RequestHTTPDeliveryService extends RequestDeliveryServiceBase {
    initialDispersion: number;
    ipv6RoutingEnabled: boolean;
    missLat: number;
    missLong: number;
    multiSiteOrigin: boolean;
    orgServerFqdn: string;
    protocol: Protocol;
    qstringIgnore: QStringHandling;
    rangeRequestHandling: RangeRequestHandling;
}
export interface RequestDNSDeliveryService extends RequestDeliveryServiceBase {
    ipv6RoutingEnabled: boolean;
    missLat: number;
    missLong: number;
    multiSiteOrigin: boolean;
    orgServerFqdn: string;
    protocol: Protocol;
    qstringIgnore: QStringHandling;
    rangeRequestHandling: RangeRequestHandling;
}
export declare type RequestSteeringDeliveryService = RequestDeliveryServiceBase;
export declare type RequestAnyMapDeliveryService = RequestDeliveryServiceBase;
export declare type RequestDeliveryService = RequestHTTPDeliveryService | RequestDNSDeliveryService | RequestSteeringDeliveryService | RequestAnyMapDeliveryService;
interface ResponseDeliveryServiceBase {
    active: boolean;
    anonymousBlockingEnabled: boolean;
    cacheurl: string | null;
    ccrDnsTtl: number | null;
    cdnId: number;
    cdnName: string | null;
    checkPath: string | null;
    consistentHashQueryParams: null | [string, ...Array<string>];
    consistentHashRegex: string | null;
    deepCachingType: "ALWAYS" | "NEVER";
    displayName: string;
    dnsBypassCname: string | null;
    dnsBypassIp: string | null;
    dnsBypassIp6: string | null;
    dnsBypassTtl: number | null;
    dscp: number;
    ecsEnabled: boolean;
    edgeHeaderRewrite: string | null;
    readonly exampleURLs: readonly string[];
    firstHeaderRewrite: string | null;
    fqPacingRate: number;
    geoLimit: GeoLimit;
    geoLimitCountries: string | null;
    geoLimitRedirectURL: string | null;
    geoProvider: GeoProvider;
    globalMaxMbps: number | null;
    globalMaxTps: number | null;
    httpBypassFqdn: string | null;
    readonly id: number;
    infoUrl: string | null;
    initialDispersion: number;
    innerHeaderRewrite: string | null;
    ipv6RoutingEnabled: boolean;
    lastHeaderRewrite: string | null;
    readonly lastUpdated: Date;
    logsEnabled: boolean;
    longDesc: string | null;
    longDesc1?: string;
    longDesc2?: string;
    matchList: Array<DeliveryServiceMatch>;
    maxDnsAnswers: number | null;
    maxOriginConnections: number;
    maxRequestHeaderBytes: number;
    midHeaderRewrite: string | null;
    missLat: number;
    missLong: number;
    multiSiteOrigin: boolean;
    originShield: string | null;
    orgServerFqdn: string;
    protocol: Protocol;
    qstringIgnore: QStringHandling;
    rangeRequestHandling: RangeRequestHandling;
    rangeSliceBlockSize: null | number;
    regexRemap: string | null;
    regionalGeoBlocking: boolean;
    remapText: string | null;
    routingName: string;
    serviceCategory: string | null;
    signed: boolean;
    signingAlgorithm: "url_sig" | "uri_signing";
    sslKeyVersion: number | null;
    tenant: string;
    tenantId: number;
    topology: string | null;
    trResponseHeaders: string | null;
    trRequestHeaders: string | null;
    type: string;
    typeId: number;
    xmlId: string;
}
interface ResponseDeliveryServiceWithProfile extends ResponseDeliveryServiceBase {
    profileDescription: string;
    profileId: number;
    profileName: string;
}
interface ResponseDeliveryServiceWithoutProfile extends ResponseDeliveryServiceBase {
    profileDescription: null;
    profileId: null;
    profileName: null;
}
export declare type ResponseDeliveryService = ResponseDeliveryServiceWithProfile | ResponseDeliveryServiceWithoutProfile;
export declare type DeliveryService = RequestDeliveryService | ResponseDeliveryService;
export declare function bypassable(ds: DeliveryService): boolean;
export interface RequestDeliveryServiceRegexp {
    pattern: string;
    setNumber: number;
    type: number;
}
export interface ResponseDeliveryServiceRegexp {
    readonly id: number;
    pattern: string;
    setNumber: number;
    type: number;
    typeName: string;
}
export declare type DeliveryServiceRegexp = RequestDeliveryServiceRegexp | ResponseDeliveryServiceRegexp;
export interface DeliveryServicesRegexps {
    dsName: string;
    regexes: Array<{
        pattern: string;
        setNumber: number;
        type: string;
    }>;
}
export interface DSSafeUpdateRequest {
    displayName: string;
    infoUrl?: string | null;
    longDesc?: string | null;
    longDesc1?: string | null;
}
export interface RequestDeliveryServicesServers {
    serverNames: Array<string>;
}
export interface ResponseDeliveryServicesServers {
    serverNames: Array<string>;
    xmlId: string;
}
export interface RequestDeliveryServiceServer {
    dsId: number;
    replace?: boolean | null;
    servers?: Array<number> | null;
}
export interface ResponseDeliveryServiceServer {
    deliveryService: number;
    readonly lastUpdated: Date;
    server: number;
}
export interface RequestServiceCategory {
    name: string;
}
export interface ResponseServiceCategory {
    readonly lastUpdated: Date;
    name: string;
}
export declare type ServiceCategory = RequestServiceCategory | ResponseServiceCategory;
export interface RequestStaticDNSEntry {
    address: string;
    cachegroupId?: number | null;
    deliveryserviceId: number;
    host: string;
    ttl: number;
    typeId: number;
}
export interface RequestStaticDNSEntryResponse {
    address: string;
    cachegroupId: number | null;
    cachegroup: string | null;
    deliveryserviceId: number;
    deliveryservice: string | null;
    host: string;
    readonly id: number;
    readonly lastUpdated: Date;
    ttl: number;
    type: string;
    typeId: number;
}
interface ResponseStaticDNSEntryBase {
    address: string;
    deliveryserviceId: number;
    deliveryservice: string;
    host: string;
    readonly id: number;
    readonly lastUpdated: Date;
    ttl: number;
    type: string;
    typeId: number;
}
interface ResponseStaticDNSEntryWithCacheGroup extends ResponseStaticDNSEntryBase {
    cachegroupId: number;
    cachegroup: string;
}
interface ResponseStaticDNSEntryWithoutCacheGroup extends ResponseStaticDNSEntryBase {
    cachegroupId: null;
    cachegroup: null;
}
export declare type ResponseStaticDNSEntry = ResponseStaticDNSEntryWithCacheGroup | ResponseStaticDNSEntryWithoutCacheGroup;
export declare type StaticDNSEntry = RequestStaticDNSEntry | RequestStaticDNSEntryResponse | ResponseStaticDNSEntry;
export {};
