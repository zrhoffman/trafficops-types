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
