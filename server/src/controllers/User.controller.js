import UserModel from '../models/User.model.js'
import StatusCode from '../../configurations/StatusCode.js'

const registerNewUser = async (request, response) => {
	const user = new UserModel({
		username: request.body.username,
		password: request.body.password
	})

	try {
		const databaseResponse = await user.save()
		response.status(StatusCode.CREATED).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
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
	registerNewUser,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID
}