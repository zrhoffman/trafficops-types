/** ResponseStatus represents a Status as returned in responses from the API. */
export interface ResponseStatus {
	description: string | null;
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
}

/** RequestStatus represents a Status as used in requests to the API. */
export interface RequestStatus {
	description?: string | null;
	name: string;
}

/**
 * Status generically represents a Status in the context of an API request or
 * response.
 */
export type Status = ResponseStatus | RequestStatus;

/** Represents a request to change a server's Status. */
export interface StatusChangeRequest {
	/**
	 * This is required to be a non-empty string if and only if `status` is
	 * `ADMIN_DOWN` or `OFFLINE`.
	 * @default ""
	 */
	offlineReason?: string | null;
	status: string;
}
