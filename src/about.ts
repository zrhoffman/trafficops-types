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

/** Represents the response to a request made to the /about API endpoint. */
export interface About {
	commitHash?: string;
	commits?: string;
	goVersion?: string;
	name?: string;
	release: string;
	/* eslint-disable @typescript-eslint/naming-convention */
	RPMVersion?: string;
	Version?: string;
	/* eslint-enable @typescript-eslint/naming-convention */
}

/** SystemInfo represents a response from /system/info. */
export interface SystemInfo {
	[parameter: string]: string;
}
