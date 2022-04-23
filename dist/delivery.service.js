export function protocolToString(p) {
    switch (p) {
        case 0:
            return "Serve only unsecured HTTP requests";
        case 1:
            return "Serve only secured HTTPS requests";
        case 2:
            return "Serve both unsecured HTTP requests and secured HTTPS requests";
        case 3:
            return "Serve secured HTTPS requests normally, but redirect unsecured HTTP requests to use HTTPS";
    }
}
export function qStringHandlingToString(q) {
    switch (q) {
        case 0:
            return "Use the query parameter string when deciding if a URL is cached, and pass it in upstream requests to the" +
                " Mid-tier/origin";
        case 1:
            return "Do not use the query parameter string when deciding if a URL is cached, but do pass it in upstream requests to the" +
                " Mid-tier/origin";
        case 2:
            return "Immediately strip URLs of their query parameter strings before checking cached objects or making upstream requests";
    }
}
export function rangeRequestHandlingToString(r) {
    switch (r) {
        case 0:
            return "Do not cache Range requests";
        case 1:
            return "Use the background_fetch plugin to serve Range requests while quietly caching the entire object";
        case 2:
            return "Use the cache_range_requests plugin to directly cache object ranges";
    }
}
export function bypassable(ds) {
    if (!Object.prototype.hasOwnProperty.call(ds, "type")) {
        return false;
    }
    switch (ds.type) {
        case "HTTP":
        case "HTTP_LIVE":
        case "HTTP_LIVE_NATNL":
        case "DNS":
        case "DNS_LIVE":
        case "DNS_LIVE_NATNL":
            return true;
        default:
            return false;
    }
}
