/** Represents the response to a request made to the /about API endpoint. */
export interface About {
	commitHash?: string;
	commits?: string;
	goVersion?: string;
	name?: string;
	release: string;
	/* eslint-disable @typescript-eslint/naming-convention */
	RPMVersion?: string;
	Version?: string;
	/* eslint-enable @typescript-eslint/naming-convention */
}

/** SystemInfo represents a response from /system/info. */
export interface SystemInfo {
	[parameter: string]: string;
}
