/**
 * Represents a Consistent Hashing Regular Expression and a sample route
 * submitted to the API to test how it would be routed.
 */
export interface ConsistentHashRegexTest {
	cdnId: number;
	regex: string;
	requestPath: string;
}

/**
 * Represents the result of a test routing of a Consistent Hashing Regular
 * Expression.
 */
export interface ConsistentHashRegexTestResult {
	resultingPathToConsistentHash: string;
	consistentHashRegex: string;
	requestPath: string;
}
