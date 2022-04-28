/** CacheStatsSeries is a set of data collected by Traffic Stats. */
export interface CacheStatsSeries {
	columns: ["time", "sum_count"];
	count: number;
	name: `${"bandwidth" | "connections" | "maxkbps"}.cdn.1min`;
	/**
	 * Each first tuple element is actually a string that represents a
	 * date/time, in a custom format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	values: Array<[Date, number | null]>;
}

/** CacheStatsSummary is a summary of some statistics set. */
export interface CacheStatsSummary {
	average: number;
	count: number;
	fifthPercentile: number;
	max: number;
	min: number;
	ninetyEightPercentile: number;
	ninetyFifthPercentile: number;
}

/** Represents a response from /cache_stats.*/
export interface CacheStats {
	/**
	 * This will be excluded if the 'exclude' query string parameter was
	 * "series" **or** if there were no data points for the requested data set.
	 */
	series?: CacheStatsSeries;
	/**
	 * This will be excluded **only** if the 'exclude' query string parameter
	 * was "summary".
	 */
	summary?: CacheStatsSummary;
}

/**
 * CurrentStats represents a response from the `/current_stats` Traffic Ops API
 * endpoint.
 */
export interface CurrentStats {
	/**
	 * Each entry in the `currentStats` array reports the recorded stats for the
	 * named CDN. The last entry is always the total across all CDNs, and
	 * doesn't report capacity. The first entry is *usually* the special ALL
	 * CDN, which - wherever it does appear - will always have `null` for all
	 * its stats.
	 */
	currentStats: [
		...Array<
		{
			bandwidth: number | null;
			capacity: number | null;
			cdn: string;
			connections: number | null;
		}
		>,
		{
			bandwidth: number | null;
			cdn: "total";
			connections: number | null;
		}
	];
}

/**
 * Not to be confused with {@link CacheStats}, CachesStats represents a set of
 * some summary statistics about all cache servers throughout Traffic Ops.
 */
export interface CachesStats {
	cachegroup: string;
	connections: number;
	healthy: boolean;
	hostname: string;
	/**
	 * For a single CachesStats, this is the service IPv4 address of the server
	 * (or `null` if it only has an IPv6 service address), and for aggregate
	 * CachesStats items (i.e. where one or more of `cachegroup`, `hostname`,
	 * `profile`, and `status`  is/are the special, reserved name "ALL") it is
	 * `null`.
	 */
	ip: string | null;
	kbps: number;
	profile: string;
	status: string;
}

/**
 * This structure gets its name from the endpoint whose response it models:
 * `/cdns/health` and/or `/deliveryservices/{{ID}}/health`, but its actual
 * purpose is to represent cache health as an aggregate across *Cache Groups*
 * within the specified CDN or Delivery Service.
 */
export interface Health {
	cacheGroups: Array<{
		name: string;
		offline: number;
		online: number;
	}>;
	totalOffline: number;
	totalOnline: number;
}

/**
 * Represents the total "capacity" of a Delivery Service or CDN in terms of
 * cache servers and their ability to perform useful functions for the CDN.
 */
export interface Capacity {
	readonly availablePercent: number;
	readonly maintenancePercent: number;
	readonly unavailablePercent: number;
	readonly utilizedPercent: number;
}

/** Represents a request to generate a DNSSEC KSK Key for a CDN. */
export interface CDNDNSSECKSKKeyGenerationRequest {
	/** @default Date.now() */
	effectiveDate?: Date | null;
	expirationDays: number;
}

/**
 * Represents the aggregated routing percentages across all CDNs, or a
 * particular Delivery Service.
 */
export interface Routing {
	cz: number;
	deepCz: number;
	dsr: number;
	err: number;
	fed: number;
	geo: number;
	miss: number;
	regionalAlternate: number;
	regionalDenied: number;
	staticRoute: number;
}

/**
 * Represents a stats summary as Traffic Ops requires it in requests.
 */
export interface RequestStatsSummary {
	/** @default "all" */
	cdnName?: string | null;
	/** @default "all" */
	deliveryServiceName?: string | null;
	statName: string;
	statValue: number;
	summaryTime: Date;
	statDate?: `${number}-${number}-${number}` | Date | null;
}

/**
 * Represents a stats summary as Traffic Ops presents it in responses.
 */
export interface ResponseStatsSummary {
	cdnName: string;
	deliveryServiceName: string;
	summaryTime: Date;
	statDate: `${number}-${number}-${number}` | null;
	statValue: number;
}

/**
 * A StatsSummary is a manually created report of some custom statistic that can
 * be retrieved later.
 */
export type StatsSummary = RequestStatsSummary | ResponseStatsSummary;

/**
 * Checks if a given string is valid as a "stat date".
 *
 * @param statDate The string to test.
 * @returns Whether `statDate` is a valid `statDate` property for an
 * {@link StatsSummary} string.
 */
export function isValidStatDate(statDate: string): statDate is `${number}-${number}-${number}` {
	return /^\d{4}-(0[1-9]|1[12])-([12][0-9]|3[01])$/.test(statDate);
}
