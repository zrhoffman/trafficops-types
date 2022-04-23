export declare const enum AlertLevel {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning"
}
export interface Alert {
    level: AlertLevel;
    text: string;
}
export declare function errors(as: Array<Alert>): Array<string>;
