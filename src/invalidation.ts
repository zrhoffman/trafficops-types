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

/** JobType enumerates the valid types of Job. */
export const enum JobType {
	/** Content Invalidation Request. */
	PURGE = "PURGE"
}

/**
 * InvalidationJob objects represent periods of time over which specific objects
 * may not be cached.
 */
export interface ResponseInvalidationJob {
	/**
	 * A regular expression that matches content to be "invalidated" or
	 * "revalidated".
	 */
	assetURL: string;
	/**
	 * The name of the user that created the Job.
	 */
	createdBy: string;
	/** The XMLID of the Delivery Service within which the Job will operate. */
	deliveryService: string;
	/** An integral, unique identifier for this Job. */
	readonly id: number;
	/** The type of Job. */
	keyword: JobType;
	/**
	 * though not enforced by the API (or database), this should ALWAYS have the
	 * format 'TTL:nh', describing the job's TTL in hours (`n` can be any
	 * integer value > 0).
	 */
	parameters: string;
	/**
	 * The time at which the Job is scheduled to start.
	 */
	startTime: Date;
}

/**
 * A NewInvalidationJob is the data structure used to request creation of a new
 * content invalidation job through the API.
 */
export interface RequestInvalidationJob {
	/**
	 * This may be either the ID or the XMLID of the Delivery Service to which
	 * the Job will apply.
	 */
	deliveryService: number | string;
	/**
	 * The effective starting date/time for the Job.
	 */
	startTime: Date | string;
	/**
	 * A pattern that matches content to be invalidated.
	 */
	regex: string;
	/**
	 * Either the number of hours or a "duration string" describing for how
	 * long the Job will remain in effect.
	 */
	ttl: number | string;
}

/** Represents a content invalidation job. */
export type InvalidationJob = RequestInvalidationJob | ResponseInvalidationJob;
