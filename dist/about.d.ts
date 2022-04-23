export interface About {
    commitHash?: string;
    commits?: string;
    goVersion?: string;
    name?: string;
    release: string;
    RPMVersion?: string;
    Version?: string;
}
export interface SystemInfo {
    [parameter: string]: string;
}
