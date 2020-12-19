import dotenv from 'dotenv'

dotenv.config()
const { ENVIROMENT } = process.env

const notFound = (req, res, next) => {
	const error = new Error(`Not found: ${req.originalUrl}`)
	res.status(404)
	next(error)
}

const errorHandler = (error, req, res, next) => {
	const statuscode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack,
	})
}

export default {
	notFound,
	errorHandler
}