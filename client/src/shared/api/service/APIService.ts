import http from '../API'
import { loginCredentials, user, email, newPasswordWithEmailToken, productCategoryNameId, createNewProduct } from '../../interface/Interface'

const authenticatedRouteExample = () => {
	return http.get('/rofl')
}

const registerNewUser = (data: user) => {
	return http.post('/user/register', data)
}

const login = (credentials: loginCredentials) => {
	return http.post('/user/login', credentials)
}

const getAllUsers = () => {
	return http.get('/user')
}

const getUserWithID = (ID: string) => {
	return http.get(`/user/${ID}`)
}

const getUserWithQuery = (usernameQuery: string) => {
	return http.get(`/searchuser?username=${usernameQuery}`)
}

const updateValuesOfExistingUser = () => {
	return http.get('/user/:userId')
}

const deleteUserWithID = () => {
	return http.delete('/user/:userId')
}

const forgotPassword = (email: email) => {
	return http.post('/forgotpassword', email)
}

const resetPassword = (newPasswordAndToken: newPasswordWithEmailToken) => {
	return http.put('/resetpassword', newPasswordAndToken)
}

// Admin privilege required to use the functions below

const createProduct = (productCategoryId: string, productData: createNewProduct) => {
	return http.post(`/product?productcategory=${productCategoryId}`, productData)
}

const createProductCategory = (productCategoryName: productCategoryNameId) => {
	return http.post('/productcategory', productCategoryName)
}

const getAllProductCategories = () => {
	return http.get('/productcategory')
}

export default {
	authenticatedRouteExample,
	registerNewUser,
	login,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID,
	forgotPassword,
	resetPassword,
	createProductCategory,
	createProduct,
	getAllProductCategories
}