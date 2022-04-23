export * from "./about";
export * from "./acme";
export * from "./alert";
export * from "./cache.group";
export * from "./cdn";
export * from "./delivery.service";
export * from "./division";
export * from "./invalidation";
export * from "./iso";
export * from "./login";
export * from "./logs";
export * from "./parameter";
export * from "./physical.location";
export * from "./plugin";
export * from "./profile";
export * from "./server";
export * from "./stats";
export * from "./status";
export * from "./type";
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
export interface APIResponse<T> {
    alerts?: Array<Alert>;
    response: T;
    summary?: {
        count: number;
    };
}
export interface PingResponse {
    ping: "pong";
}
