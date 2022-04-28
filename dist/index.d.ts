export * from "./about";
export * from "./acme";
export * from "./alert";
export * from "./cache.group";
export * from "./capability";
export * from "./cdn";
export * from "./coordinate";
export * from "./delivery.service.request";
export * from "./delivery.service";
export * from "./division";
export * from "./dnssec";
export * from "./federation";
export * from "./invalidation";
export * from "./iso";
export * from "./login";
export * from "./logs";
export * from "./origin";
export * from "./physical.location";
export * from "./plugin";
export * from "./profile";
export * from "./router";
export * from "./server.capability";
export * from "./server";
export * from "./snap.and.queue";
export * from "./ssl";
export * from "./stats";
export * from "./status";
export * from "./steering";
export * from "./topology";
export * from "./type";
export * from "./uri.signing";
export * from "./user";
export * from "./vault";
import type { Alert } from "./alert";
interface VersionType {
    readonly major: number;
    readonly minor: number;
    toString(): string;
    readonly unstable: boolean;
}
export declare const VERSION: VersionType;
export interface APISuccessResponse<T> {
    alerts?: Array<Alert>;
    response: T;
    summary?: {
        count: number;
    };
}
export interface PingResponse {
    ping: "pong";
}
