import Axios from 'axios'

const API = Axios.create({
	baseURL: 'http://localhost:3001',
})

export default API