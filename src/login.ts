/*
 * trafficops-types Typings and utility functions for Traffic Ops API objects.
 * Copyright (C) 2022  ocket8888
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
