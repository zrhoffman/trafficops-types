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
 * Represents all of the information necessary to route a steered Delivery
 * Service.
 */
export interface SteeringConfiguration {
	clientSteering: boolean;
	/**
	 * The XMLID of the Delivery Service for which this configuration was made.
	 */
	deliveryService: string;
	filters: Array<{
		/** The XMLID of a target Delivery Service. */
		deliveryService: string;
		pattern: string;
	}>;
	targets: Array<{
		/** The XMLID of a target Delivery Service. */
		deliveryService: string;
		order: number;
		weight: number;
	}>;
}

/**
 * Represents a Steering Target as Traffic Ops requires it in requests used to
 * modify existing Steering Targets.
 */
export interface SteeringTargetModificationRequest {
	typeId: number;
	value: number;
}

/**
 * Represents a Steering Target as Traffic Ops requires it in requests used to
 * create new Steering Targets.
 */
export interface SteeringTargetCreationRequest extends SteeringTargetModificationRequest {
	targetId: number;
}

/** Represents a Steering Target as Traffic Ops requires it in requests. */
export type RequestSteeringTarget = SteeringTargetModificationRequest | SteeringTargetCreationRequest;

/**
 * Represents a Steering Target as Traffic Ops presents it in responses.
 */
export interface ResponseSteeringTarget extends SteeringTargetCreationRequest {
	deliveryservice: string;
	deliveryserviceId: number;
	target: string;
	type: string;
}

/**
 * A Steering Target is a configuration for the targeting of a specific
 * downstream Delivery Service by a Steering "parent" Delivery Service.
 */
export type SteeringTarget = RequestSteeringTarget | ResponseSteeringTarget;
