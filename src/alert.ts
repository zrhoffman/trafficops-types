/** The allowed/known "level"s of Traffic Ops API Alerts. */
export const enum AlertLevel {
	/** An error occurred, and the request could not be fulfilled. */
	ERROR = "error",
	/** Informative alert, not indicative of success or failure. */
	INFO = "info",
	/** The request succeeded, and the Alert text describes the action taken. */
	SUCCESS = "success",
	/** The request may have succeeded, but the user should be aware of something. */
	WARNING = "warning"
}

/**
 * An Alert is some human-readable notification sent back from the Traffic Ops
 * API for the user, in addition to a response object where applicable.
 */
export interface Alert {
	level: AlertLevel;
	text: string;
}

/**
 * Gets the text of any and all error-level Alerts.
 *
 * @param as Alerts to check for errors.
 * @returns The `text` of each error-level Alert found in `as`.
 */
export function errors(as: Array<Alert>): Array<string> {
	return as.filter(a=>a.level===AlertLevel.ERROR).map(a=>a.text);
}
