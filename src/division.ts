/**
 * Represents a Division as required by the Traffic Ops API in requests.
 */
export interface RequestDivision {
	name: string;
}

/**
 * Represents a Division as returned by the Traffic Ops API in responses.
 */
export interface ResponseDivision {
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Representns a Division. */
export type Division = RequestDivision | ResponseDivision;

/**
 * Represents a Region as required by the Traffic Ops API in requests.
 */
export interface RequestRegion {
	division: number;
	name: string;
}

/**
 * Represents a Region as returned by the Traffic Ops API in responses.
 */
export interface ResponseRegion {
	division: number;
	divisionName: string;
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Represents a Region. */
export type Region = RequestRegion | ResponseRegion;
