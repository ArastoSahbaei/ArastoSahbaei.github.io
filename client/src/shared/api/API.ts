import Axios from 'axios'

const API = Axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' }
})

API.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token')
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})

export default API