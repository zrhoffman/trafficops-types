export interface Log {
    readonly id: number;
    readonly lastUpdated: Date;
    level: "APICHANGE";
    message: string;
    readonly ticketNum: number | null;
    user: string;
}
export declare function logEntryToString(log: Log): string;
export interface NewLogCount {
    newLogcount: number;
}
