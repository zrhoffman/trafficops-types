/*
 * trafficops-types Typings and utility functions for Traffic Ops API objects.
 * Copyright (C) 2022  ocket8888
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
