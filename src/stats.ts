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
