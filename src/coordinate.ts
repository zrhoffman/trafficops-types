/**
 * Represents a Coordinate as Traffic Ops requires it in requests made to the
 * `/coordinates` endpoint of its API.
 */
export interface RequestCoordinate {
	latitude: number;
	longitude: number;
	name: string;
}

/**
 * Represents a Coordinate as presented by Traffic Ops in responses from the
 * `/coordinates` endpoint of its API.
 */
export interface ResponseCoordinate {
	readonly id: number;
	readonly lastUpdated: Date;
	latitude: number;
	longitude: number;
	name: string;
}

/** Represents a Coordinate in an arbitrary context. */
export type Coordinate = RequestCoordinate | ResponseCoordinate;
