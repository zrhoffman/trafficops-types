export function userEmailIsValid(email) {
    return /^.+@.+\..+$/.test(email);
}
