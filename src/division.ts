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
