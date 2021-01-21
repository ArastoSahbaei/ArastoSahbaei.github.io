export interface user {
	username: string,
	password: string
}
export interface email {
	email: string
}

export interface loginCredentials {
	username: string,
	password: string
}

export interface registerNewUser {
	username: string,
	password: string
}

export interface authenticatedUser {
	username: string | undefined,
	token: string | undefined,
	authenticated: boolean
}

export interface newPasswordWithEmailToken {
	password: string,
	resetPasswordToken: string
}
export interface productCategoryName {
	productCategoryName: string
}

export interface createNewProduct {
	title?: string
	price?: number
	quantity?: number
}