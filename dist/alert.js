export function errors(as) {
    return as.filter(a => a.level === "error").map(a => a.text);
}
