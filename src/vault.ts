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
 * The type of a response from the `vault/ping` endpoint of the Traffic Ops API.
 */
export interface VaultPing {
	status: string;
	server: string;
}

/**
 * The type of a response from the `vault/bucket/{{bucket}}/key/{{key}}/values`
 * endpoint of the Traffic Ops API.
 *
 * @deprecated This representation is extremely tightly coupled with the
 * deprecated Riak backend Traffic Vault provider, and has been removed from the
 * latest API version.
 */
export interface BucketValues {
	[bucket: string]: unknown;
}
