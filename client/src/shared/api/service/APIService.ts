import http from '../API'
import user from '../../interface/Interface'
import loginCredentials from '../../interface/Interface'

const registerNewUser = (data: user) => {
	return http.post('/user', data)
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


export default {
	registerNewUser,
	login,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID
}