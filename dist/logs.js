export function logEntryToString(log) {
    const { id, lastUpdated, level, message, ticketNum, user } = log;
    let ret = `#${id} ${lastUpdated.toISOString()}: ${user} via ${level}`;
    if (ticketNum !== null) {
        ret += ` (From Ticket #${ticketNum})`;
    }
    return `${ret}: ${message}`;
}
