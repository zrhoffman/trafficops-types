export function isValidStatDate(statDate) {
    return /^\d{4}-(0[1-9]|1[12])-([12][0-9]|3[01])$/.test(statDate);
}
