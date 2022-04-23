/**
 * A RequestParameter is a Parameter as given in PUT and POST requests to
 * /parameters.
 */
export interface RequestParameter {
	configFile: string;
	name: string;
	secure: boolean;
	value: string;
}

/**
 * A ResponseParameter is a Parameter as given by Traffic Ops in its API
 * responses.
 */
export interface ResponseParameter {
	configFile: string;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	lastUpdated: Date;
	name: string;
	profiles: Array<string>;
	secure: boolean;
	value: string;
}

/**
 * A Parameter generically represents a Parameter, either in request format or
 * response format.
 */
export type Parameter = RequestParameter | ResponseParameter;
