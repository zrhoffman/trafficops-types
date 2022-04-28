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

import type { DeliveryService } from "./delivery.service";

/**
 * Represents a request to create or edit a Delivery Service Request Comment.
 */
export interface RequestDeliveryServiceRequestComment {
	deliveryServiceRequestId: number;
	value: string;
}

/**
 * Represents a response from Traffic Ops to a request for the creation or
 * modification of a Delivery Service Request Comment.
 */
export interface RequestDeliveryServiceRequestCommentResponse {
	authorId: number;
	/**
	 * This will be whatever it was in the request - not necessarily the truth.
	 * (undefined will be coerced into `null`).
	 */
	author: string | null;
	deliveryServiceRequestId: number;
	readonly id: number;
	readonly lastUpdated: Date;
	value: string;
	/**
	 * This will be whatever it was in the request - not necessarily the truth.
	 * (undefined will be coerced into `null`).
	 */
	xmlId: string | null;
}

/**
 * Represents a Delivery Service Request Comment as it appears in responses to
 * `GET` requests made to the `/deliveryservice_request_comments` endpoint of
 * the Traffic Ops API.
 */
export interface ResponseDeliveryServiceRequestComment {
	authorId: number;
	author: string;
	deliveryServiceRequestId: number;
	readonly id: number;
	readonly lastUpdated: Date;
	value: string;
	xmlId: string;
}

/** Represents a Delivery Service Request comment in an arbitrary context. */
export type DeliveryServiceRequestComment = RequestDeliveryServiceRequestComment | RequestDeliveryServiceRequestCommentResponse | ResponseDeliveryServiceRequestComment;

/** The various types of changes indicated by a Delivery Service Request (DSR). */
export const enum DSRChangeType {
	/** The `changeType` of a DSR for creating a new Delivery Service. */
	CREATE = "create",
	/** The `changeType` of a DSR for deleting an existing Delivery Service. */
	DELETE = "delete",
	/** The `changeType` of a DSR for modifying an existing Delivery Service.  */
	UPDATE = "update"
}

/** The various statuses of a Delivery Service Request (DSR). */
export const enum DSRStatus {
	/** This request has been carried out fully and was enacted as stated. */
	COMPLETE = "complete",
	/** This request is a draft, and isn't ready to be implemented. */
	DRAFT = "draft",
	/**
	 * This request has been accepted, but is waiting for further actions before
	 * it can be called complete.
	 */
	PENDING = "pending",
	/** This request will never be implemented as-is. */
	REJECTED = "rejected",
	/** This request is ready for review and either approval or rejection. */
	SUBMITTED = "submitted"
}

/**
 * Represents a Delivery Service Request as Traffic Ops requires it in requests.
 */
export interface RequestDeliveryServiceRequest {
	assigneeId?: number | null;
	changeType: DSRChangeType;
	deliveryService: DeliveryService;
	status: DSRStatus;
}

/** A Delivery Service Request with no assignee, as it appears in responses. */
interface UnassignedResponseDeliveryServiceRequest {
	readonly author: string;
	readonly authorId: number;
	changeType: DSRChangeType;
	readonly createdAt: Date;
	deliveryService: DeliveryService;
	readonly id: number;
	readonly lastEditedBy: string;
	readonly lastEditedById: number;
	readonly lastUpdated: Date;
	status: DSRStatus;
}

/** An assigned DSR, as it appears in responses. */
interface AssignedResponseDeliveryServiceRequest extends UnassignedResponseDeliveryServiceRequest {
	assignee: string;
	assigneeId: number;
}

/**
 * Represents a Delivery Service Request as it appears in (some) responses
 */
export type ResponseDeliveryServiceRequest = AssignedResponseDeliveryServiceRequest | UnassignedResponseDeliveryServiceRequest;

/** Represents a Delivery Service Request in an arbitrary context. */
export type DeliveryServiceRequest = ResponseDeliveryServiceRequest | RequestDeliveryServiceRequest;

/**
 * Represents a request to change the assignee of a DSR.
 *
 * Both an undefined value and `null` mean "remove the current assignee".
 */
export interface DeliveryServiceAssignmentChangeRequest {
	assigneeId?: number | null;
}

/**
 * Represents a request to change the status of a DSR.
 */
export interface DeliveryServiceStatusChangeRequest {
	status: DSRStatus;
}

/**
 * Represents a request to submit a Delivery Service change or creation request
 * via email through the `/deliveryservices/request` endpoint of the Traffic Ops
 * API.
 *
 * @deprecated This structure is superseded by {@link DeliveryServiceRequest}
 * objects and has been removed from the latest version of the API.
 */
export interface DeliveryServicesRequest {
	details: {
		customer: string;
		deepCachingType: "ALWAYS" | "NEVER";
		deliveryProtocol: "http" | "https" | "http/https";
		hasNegativeCachingCustomization: boolean;
		hasOriginACLWhitelist: boolean;
		hasOriginDynamicRemap: boolean;
		hasSignedURLs: boolean;
		headerRewriteEdge?: string | null;
		headerRewriteMid?: string | null;
		headerRewriteRedirectRouter?: string | null;
		maxLibrarySizeEstimate: string;
		negativeCachingCustomizationNote: string;
		notes?: string | null;
		originHeaders?: string | null;
		originTestFile: string;
		originURL: string;
		otherOriginSecurity?: string | null;
		overflowService?: string | null;
		peakBPSEstimate: string;
		peakTPSEstimate: string;
		queryStringHandling: string;
		rangeRequestHandling: string;
		rateLimitingGBPS?: number | null;
		rateLimitingTPS?: number | null;
		routingName?: string | null;
		routingType: "HTTP" | "DNS" | "STEERING" | "ANY_MAP";
		serviceAliases?: Array<string> | null;
		serviceDesc: string;
	};
	emailTo: string;
}
