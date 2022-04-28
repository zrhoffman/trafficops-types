function exhaustiveServiceAddresses(ips) {
    let ipv4 = null;
    let ipv6 = null;
    for (const ip of ips) {
        if (ip.serviceAddress) {
            if (ip.address.includes(":")) {
                if (ipv6 !== null) {
                    throw new Error(`found two IPv6 service addresses: '${ipv6.address}' and '${ip.address}'`);
                }
                ipv6 = ip;
            }
            else if (ipv4 !== null) {
                throw new Error(`found two IPv4 service addresses: '${ipv4.address}' and '${ip.address}'`);
            }
            else {
                ipv4 = ip;
            }
        }
    }
    return [ipv4, ipv6];
}
function inexhaustiveServiceAddresses(ips) {
    let ipv4 = null;
    let ipv6 = null;
    for (const ip of ips) {
        if (ip.serviceAddress) {
            if (ip.address.includes(":")) {
                if (ipv6 !== null) {
                    throw new Error(`found two IPv6 service addresses: '${ipv6.address}' and '${ip.address}'`);
                }
                ipv6 = ip;
            }
            else if (ipv4 !== null) {
                throw new Error(`found two IPv4 service addresses: '${ipv4.address}' and '${ip.address}'`);
            }
            else {
                ipv4 = ip;
            }
        }
        if (ipv4 !== null && ipv6 !== null) {
            break;
        }
    }
    return [ipv4, ipv6];
}
export function serviceAddresses(infs, exhaustive = false) {
    const arr = infs.map(inf => inf.ipAddresses).flat();
    if (exhaustive) {
        return exhaustiveServiceAddresses(arr);
    }
    return inexhaustiveServiceAddresses(arr);
}
export function checkMap(srv) {
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
