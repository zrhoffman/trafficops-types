/**
 * TypeFromResponse represents a Type as shown in the responses from the API.
 *
 * This breaks the naming convention used in the rest of this library because
 * ResponseType is already a global type in browsers and NodeJS.
 */
export interface TypeFromResponse {
	description: string;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
	useInTable: string;
}

/** RequestType represents a Type as given in requests to the API. */
export interface RequestType {
	description: string;
	name: string;
	/**
	 * In practice this is limited to "server" and "cachegroup".
	 */
	useInTable: string;
}

/** Type generically represents a Type in the context of an API request or response.  */
export type Type = TypeFromResponse | RequestType;
