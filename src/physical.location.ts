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
 * Represents a Physical Location as returned by the Traffic Ops API in
 * responses.
 */
export interface ResponsePhysicalLocation {
	/** The Physical Location’s street address. */
	address: string;
	/** The name of the city in which the Physical Location lies. */
	city: string;
	/** Any and all human-readable comments. */
	comments: string | null;
	/** The email address of the Physical Location’s poc. */
	email: string | null;
	/** An integral, unique identifier for the Physical Location. */
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	/** The name of the Physical Location. */
	name: string;
	/** A phone number where the the Physical Location’s poc might be reached. */
	phone: string | null;
	/** The name of a “point of contact” for the Physical Location. */
	poc: string | null;
	/**
	 * The name of the region within which the Physical Location lies.
	 *
	 * This will be `null` in responses to PUT or POST requests which didn't
	 * specify it, or which explicitly specified it as `null`.
	 */
	region: string | null;
	/**
	 * An integral, unique identifier for the region within which the Physical
	 * Location lies.
	 */
	regionId: number;
	/** An abbreviation of the name. */
	shortName: string;
	/**
	 * An abbreviation (usually) of the name of the state or province within
	 * which this Physical Location lies.
	 */
	state: string;
	/** The zip code of the Physical Location. */
	zip: string;
}

/**
 * Represents a Physical Location as required by the Traffic Ops API in
 * requests.
 */
export interface RequestPhysicalLocation {
	/** The Physical Location’s street address. */
	address: string;
	/** The name of the city in which the Physical Location lies. */
	city: string;
	/** Any and all human-readable comments. */
	comments?: string | null;
	/** The email address of the Physical Location’s poc. */
	email?: string | null;
	/** The name of the Physical Location. */
	name: string;
	/** A phone number where the the Physical Location’s poc might be reached. */
	phone?: string | null;
	/** The name of a “point of contact” for the Physical Location. */
	poc?: string | null;
	/**
	 * An integral, unique identifier for the region within which the Physical
	 * Location lies.
	 */
	regionId: number;
	/**
	 * An abbreviation (usually) of the name of the state or province within
	 * which this Physical Location lies.
	 */
	state: string;
	/** The zip code of the Physical Location. */
	zip: string;
}

/** Represents a Physical Location. */
export type PhysicalLocation = ResponsePhysicalLocation | RequestPhysicalLocation;
