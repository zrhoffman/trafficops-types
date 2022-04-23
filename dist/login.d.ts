export interface LoginRequest {
    p: string;
    u: string;
}
export interface OAuthLoginRequest {
    authCodeTokenUrl: string;
    code: string;
    clientId: string;
    redirectUri: string;
}
export interface TokenLoginRequest {
    t: string;
}
export interface ResetPasswordRequest {
    email: `${string}@${string}.${string}`;
}
export interface RegistrationRequest {
    email: `${string}@${string}.${string}`;
    role: number;
    tenantId: number;
}
