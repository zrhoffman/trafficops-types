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

/** The basic fields common to all ISO request bodies. */
interface ISOFields {
	disk: string;
	domainName: string;
	hostName: string;
	interfaceMtu: number;
	interfaceName?: string | null;
	ip6Address?: string | null;
	ip6Gateway?: string | null;
	osVersionsDir: string;
	rootPass: string;
}

/**
 * An ISO generation request. If DHCP isn't used, network information must be
 * manually supplied.
 */
interface ISORequestDHCP extends ISOFields {
	dhcp: "no";
	ipAddress: string;
	ipGateway: string;
	ipNetmask: string;
}

/**
 * An ISO generation request. If DHCP is used, network inforation need not be
 * supplied.
 */
interface ISORequestNonDHCP extends ISOFields {
	dhcp: "yes";
}

/**
 * Represents a request to the `/isos` endpoint of the Traffic Ops API.
 */
export type ISORequest = ISORequestDHCP | ISORequestNonDHCP;

/**
 * Represents a response from the Traffic Ops API to a request made to its
 * `/osversions` endpoint.
 */
export interface OSVersions {
	[osversion: string]: string;
}
