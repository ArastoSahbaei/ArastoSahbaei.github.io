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
export interface productCategoryNameId {
	productCategoryName: string,
	_id?: string
}

export interface createNewProduct {
	title: string
	price: number
	quantity: number
	productCategory: string,
	productBrand: string
}

export interface createNewProductBrand {
	productBrandName: string,
	brandDescription?: string,
	brandCountry?: string
}

export interface productBrandInterface {
	productBrand: string,
	_id?: string
	brandDescription?: string,
	brandCountry?: string
}

export interface updateCartInterface {
	user: string,
	products: Array<string>
}