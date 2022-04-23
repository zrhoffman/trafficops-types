/**
 * The standard, traditional body of a login request.
 */
export interface LoginRequest {
	/** The user's password. */
	p: string;
	/** The user's username. */
	u: string;
}

/**
 * The body of a login request submitted through the `/user/login/oauth`
 * endpoint of the Traffic Ops API.
 */
export interface OAuthLoginRequest {
	authCodeTokenUrl: string;
	code: string;
	clientId: string;
	redirectUri: string;
}

/**
 * The body of a login request submitted through the `/user/login/token`
 * endpoint of the Traffic Ops API.
 */
export interface TokenLoginRequest {
	/** The user's authentication token. */
	t: string;
}

/**
 * The body of a password reset request submitted through the
 * `/user/reset_password` endpoint of the Traffic Ops API.
 */
export interface ResetPasswordRequest {
	email: `${string}@${string}.${string}`;
}

/**
 * The body of a new user registration request submitted through the
 * `/users/register` endpoint of the Traffic Ops API.
 */
export interface RegistrationRequest {
	email: `${string}@${string}.${string}`;
	role: number;
	tenantId: number;
}
