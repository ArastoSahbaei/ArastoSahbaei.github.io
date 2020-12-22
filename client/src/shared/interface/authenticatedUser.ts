export default interface authenticatedUser {
	username: string | undefined,
	token: string | undefined,
	authenticated: boolean
}