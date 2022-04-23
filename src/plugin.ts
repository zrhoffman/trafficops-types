/**
 * Represents a Traffic Ops plugin as reported by the `/plugins` API endpoint.
 *
 * Plugins cannot be modified through the API.
 */
export interface TOPlugin {
	readonly description: string;
	readonly name: string;
	readonly version: string;
}
