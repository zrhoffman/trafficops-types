/**
 * This file is for modeling and functionality related to Server objects
 */

/** IPAddress is a single IP address of a single network interface of a server. */
export interface IPAddress {
	/** The actual IP address. */
	address: string;
	/** The IP address of a gateway for this IP, if one exists/is known. */
	gateway: string | null;
	/** Whether or not this IP address is responsible for serving ATC traffic. */
	serviceAddress: boolean;
}

/** Interface is a server's network interface. */
export interface Interface {
	/** The IP addresses assigned to this network interface. */
	ipAddresses: Array<IPAddress>;
	/** The maximum bandwidth for considering the server healthy, if any. */
	maxBandwidth: number | null;
	/**
	 * Whether or not the Traffic Monitor should consider this network interface
	 * in health calculations.
	 */
	monitor: boolean;
	/** The maximum transmission unit of the network interface, if known. */
	mtu: number | null;
	/** The name of the network interface in the `/dev` directory. */
	name: string;
}

/**
 * Searches a collection of IPAddresses exhaustively for service addresses.
 *
 * @param ips The IPAddresses to search.
 * @returns A tuple of the found IPv4 and IPv6 addresses, each being `null` if
 * not found.
 */
function exhaustiveServiceAddresses(ips: Array<IPAddress>): [IPAddress | null, IPAddress | null] {
	let ipv4 = null;
	let ipv6 = null;
	for (const ip of ips) {
		if (ip.serviceAddress) {
			if (ip.address.includes(":")) {
				if (ipv6 !== null) {
					throw new Error(`found two IPv6 service addresses: '${ipv6.address}' and '${ip.address}'`);
				}
				ipv6 = ip;
			} else if (ipv4 !== null) {
				throw new Error(`found two IPv4 service addresses: '${ipv4.address}' and '${ip.address}'`);
			} else {
				ipv4 = ip;
			}
		}
	}
	return [ipv4, ipv6];
}

/**
 * Searches for service IP Addresses in the given collection, traversing the
 * list as little as possible to find a valid set.
 * @param ips The collection of IPs to search.
 * @returns A tuple of the found IPv4 and IPv6 addresses, each being `null` if
 * not found.
 */
function inexhaustiveServiceAddresses(ips: Array<IPAddress>): [IPAddress | null, IPAddress | null] {
	let ipv4 = null;
	let ipv6 = null;
	for (const ip of ips) {
		if (ip.serviceAddress) {
			if (ip.address.includes(":")) {
				if (ipv6 !== null) {
					throw new Error(`found two IPv6 service addresses: '${ipv6.address}' and '${ip.address}'`);
				}
				ipv6 = ip;
			} else if (ipv4 !== null) {
				throw new Error(`found two IPv4 service addresses: '${ipv4.address}' and '${ip.address}'`);
			} else {
				ipv4 = ip;
			}
		}
		if (ipv4 !== null && ipv6 !== null) {
			break;
		}
	}
	return [ipv4, ipv6];
}

/**
 * Extracts the "service" address of an {@link IPAddress} collection or
 * {@link Interface}.
 *
 * @param inf The interface or raw list of IP addresses from which to extract
 * service addresses.
 * @param exhaustive If `true`, the function will check for service addresses
 * exhaustively. When this is `false`, the function returns as soon as it finds
 * one service address per address family - essentially assuming that there are
 * no duplicates. Exhaustive searches will ensure there is no more than one
 * service address per family by checking the entire collection.
 * @returns A tuple of the IPv4 service address of the interface (or `null` if
 * it doesn't have one) and the IPv6 service address of the interface (or `null`
 * if it doesn't have one). Note that this function does not check for the case
 * when a collection of IPs has no service addresses - it is up to the caller to
 * recognize that a return value of `[null, null]` indicates an invalid
 * collection.
 * @throws {Error} When more than one service address is found for a single
 * address family.
 */
export function serviceAddresses(inf: Interface | Array<IPAddress>, exhaustive = false): [ipv4Address: IPAddress | null, ipv6Address: IPAddress | null] {
	const arr = inf instanceof Array ? inf : inf.ipAddresses;
	if (exhaustive) {
		return exhaustiveServiceAddresses(arr);
	}
	return inexhaustiveServiceAddresses(arr);
}

/**
 * Represents a nebulous "server" object as returned by Traffic Ops in
 * responses.
 */
export interface ResponseServer {
	/** The Cache Group to which the server belongs. */
	cachegroup: string;
	/**
	 * The integral, unique identifier of the Cache Group to which the server
	 * belongs.
	 */
	cachegroupId: number;
	/**
	 * The integral, unique identifier of the CDN to which the server belongs.
	 */
	cdnId: number;
	/** The name of the CDN to which the server belongs. */
	cdnName: string;
	/**
	 * The servers FQDN without its hostname - e.g. 'apache.org' from
	 * 'trafficcontrol.apache.org'.
	 */
	domainName: string;
	/**
	 * Legacy field with no purpose.
	 *
	 * @deprecated This field has no purpose and is subject to removal in the
	 * future.
	 */
	guid: number | null;
	/**
	 * The server's hostname, e.g. 'trafficcontrol' from
	 * 'trafficcontrol.apache.org'.
	 */
	hostName: string;
	/** The port used to serve HTTPS responses, if any. */
	httpsPort: number | null;
	/** An integral, unique identifier for this Server. */
	readonly id: number;
	/** The IP address of the Server's ILO interface. */
	iloIpAddress: string | null;
	/** The IP address of the gateway to the Server's ILO interface. */
	iloIpGateway: string | null;
	/**
	 * A netmask that describes the subnet allocated to the Server's ILO
	 * interface.
	 */
	iloIpNetmask: string | null;
	/** The Server's ILO interface's password. */
	iloPassword: string | null;
	/** The Server's ILO interface's root user's name. */
	iloUsername: string | null;
	/** The Server's network interfaces. */
	interfaces: Array<Interface>;
	/** The date/time at which the Server was last updated. */
	lastUpdated: Date;
	/** The IP address of the server's management interface. */
	mgmtIpAddress: string | null;
	/** The IP address of the gateway to the Server's management interface. */
	mgmtIpGateway: string | null;
	/**
	 * The netmask that describes the subnet allocated to the Server's
	 * management interface.
	 */
	mgmtIpNetmask: string | null;
	/** The reason the Server has been taken out of service. */
	offlineReason: string | null;
	/** The physical location in which the Server resides. */
	physLocation: string;
	/**
	 * An integral, unique identifier for the physical location in which the
	 * Server resides.
	 */
	physLocationId: number;
	/** The Profile used by the Server. */
	profile: string;
	/**
	 * A description of the Profile used by the Server.
	 *
	 * @deprecated Future representations of Server objects will drop the
	 * Profile description entirely, as it's trivially deduced from Profile
	 * identity.
	 */
	profileDesc: string;
	/**
	 * An integral, unique identifier for the Profile used by the Server.
	 *
	 * @deprecated In the latest API version, a server's Profile is identified
	 * only by name, not unique, integral identifier.
	 */
	profileId: number;
	/** Whether or not revalidations are pending for this Server. */
	revalPending: boolean;
	/**
	 * Legacy field with no purpose.
	 *
	 * @deprecated This field has no purpose and is subject to removal in the
	 * future.
	 */
	rack: string | null;
	/** The hostname of the router that routes to this Server. */
	routerHostName: string | null;
	/** The... name... of the port... used by the Server's router?? */
	routerPortName: string | null;
	/** The Server's status. */
	status: string;
	/** An integral, unique, identifier for the Server's Status. */
	statusId: number;
	/** The time at which the server's status was last updated. */
	statusLastUpdated: Date | null;
	/** The port on which the Server listens for incoming TCP connections. */
	tcpPort: number | null;
	/** The type of the Server. */
	type: string;
	/** An integral, unique identifier for the Type of this Server. */
	typeId: number;
	/** Whether or not this Server has updates pending. */
	updPending: boolean;
	/**
	 * The string used by Traffic Router for consistent hashing to this Server.
	 *
	 * This is generated for the server upon its creation, and cannot be
	 * modified afterwards.
	 */
	readonly xmppId: string;
	/** legacy field with no purpose. */
	xmppPasswd?: string | null;
}

/**
 * Servercheck models the data returned by the /servercheck API endpoint.
 */
export interface Servercheck {
	/** contains the server's Status */
	adminState: string;
	/** the name of the Cache Group to which the server belongs */
	cacheGroup: string;
	/**
	 * Checks emulates a map of check names to their numbers. All values are
	 * numbers, but some may express boolean concepts; for example, the ORT
	 * check uses 1 to represent "true" and any other value indicates "false".
	 */
	checks?: Record<string, number>;
	/** the server's hostname */
	hostName: string;
	/** the server's ID */
	id: number;
	/** the name of the server's Profile */
	profile: string;
	/** whether or not the server has pending revalidations */
	revalPending: boolean;
	/** the name of the server's Type */
	type: string;
	/** whether or not the server has updates pending */
	updPending: boolean;
}

/**
 * Builds a true Map from the Servercheck's "checks" property.
 *
 * @param srv The Servercheck to convert.
 * @returns A map of servercheck check names to their values.
 */
export function checkMap(srv: Servercheck): Map<string, number | boolean> {
	const ret = new Map();
	if (!srv.checks) {
		return ret;
	}
	for (const [key, value] of Object.entries(srv.checks)) {
		switch (key) {
			case "ILO":
			case "10G":
			case "FQDN":
			case "DSCP":
			case "10G6":
			case "MTU":
				ret.set(key, value === 1);
				break;
			default:
				ret.set(key, value);
				break;
		}
	}
	return ret;
}
