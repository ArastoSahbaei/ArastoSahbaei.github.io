import jwt from 'jsonwebtoken'
import passport from 'passport'
import UserModel from '../models/User.model.js'
import StatusCode from '../../configurations/StatusCode.js'

const login = async (request, response, next) => {
	passport.authenticate('login', (err, users, info) => {
		/* 	if (err) { console.error(`error ${err}`) } */
		if (info !== undefined) {
			info.message === 'bad username'
				? response.status(StatusCode.UNAUTHORIZED).send(info.message)
				: response.status(StatusCode.FORBIDDEN).send(info.message)
		} else {
			request.logIn(users, () => {
				UserModel.findOne({ username: request.body.username })
					.then(user => {
						const token = jwt.sign({ id: user._id }, 'jwtSecret.secret', { expiresIn: 60 * 60 })
						response.status(200).send({
							authenticated: true,
							token,
							username: user.username,
							id: user._id
						})
					})
			})
		}
	})(request, response, next)
}

const registerNewUser = async (request, response, next) => {
	passport.authenticate('register', (err, user, info) => {
		/* if (err) { console.error(err) } */
		if (info !== undefined) {
			response.status(StatusCode.FORBIDDEN).send(info.message)
		} else {
			request.logIn(user, error => {
				const data = { username: request.body.username }
				UserModel.findOne({ where: data.username })
					.then(user => {
						console.log('THIS IS LE USER:', user)
						UserModel.update({
							username: data.username,
						}).then(() => {
							response.status(StatusCode.CREATED).send(data)
						})
					})
			})
		}
	})(request, response, next)


	/* 	const user = new UserModel({
			username: request.body.username,
			password: request.body.password
		})
	
		try {
			const databaseResponse = await user.save()
			response.status(StatusCode.CREATED).send(databaseResponse)
		} catch (error) {
			response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
		} */
}

const getAllUsers = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getUserWithID = async (request, response) => {
	try {
		const databaseResponse = await UserModel.findById(request.params.userId)
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrieve user with ID: ' + request.params.userId,
			error: error.message
		})
	}
}

const getUserWithQuery = async (request, response) => {
	try {
		const databaseResponse = await UserModel.find({ username: request.query.username })
		databaseResponse.length !== 0
			? response.status(StatusCode.OK).send(databaseResponse)
			: response.status(StatusCode.NOT_FOUND).send({ message: 'Could not find user with username ' + request.query.username })
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrieve user with username: ' + request.query.userId,
			error: error.message
		})
	}
}

const updateValuesOfExistingUser = async (request, response) => {
	try {
		if (!request.body) { return response.status(StatusCode.BAD_REQUEST).send({ message: 'Empty values were sent' }) }
		const databaseResponse = await UserModel.findByIdAndUpdate(request.params.userId, {
			username: request.body.username,
			password: request.body.password
		}, { new: true })
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to update values of the user with ID: ' + request.params.userId,
			error: error.message
		})
	}
}

const deleteUserWithID = async (request, response) => {
	try {
		const databaseResponse = await UserModel.findByIdAndDelete(request.params.userId)
		response.status(StatusCode.OK).send({ message: `Sucessfully deleted the USER with username: ${databaseResponse.username} and ID: ${request.params.userId}` })
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occured while trying to delete user with the ID: ${request.params.userId}`,
			error: error.message
		})
	}
}

export default {
	login,
	registerNewUser,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID
}