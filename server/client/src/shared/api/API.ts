import Axios from 'axios'
import LocalStorage from '../cache/LocalStorage'

const API = Axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' }
})

API.interceptors.request.use(function (config) {
	const token = localStorage.getItem(LocalStorage.authenticationToken)
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})

export default API