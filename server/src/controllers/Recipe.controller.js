import RecipeModel from '../models/Recipe.model.js'
import UserModel from '../models/User.model.js'
import StatusCode from '../../configurations/StatusCode.js'

const createNewRecipe = async (request, response) => {
	if (!request.body.title) { return response.status(StatusCode.BAD_REQUEST).send({ message: 'recipe must be included' }) }

	const recipe = new RecipeModel({
		title: request.body.title,
		duration: request.body.duration,
		ingrediens: request.body.ingrediens,
		description: request.body.description,
		originCountry: request.body.originCountry,
		views: request.body.views
	})

	try {
		const user = await UserModel.findById({ _id: request.query.userid })
		user.createdRecipes.push(recipe)
		const createdRecipe = await user.save()
		response.status(StatusCode.CREATED).send(createdRecipe)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getAllRecipes = async (request, response) => {
	//TODO: Returns empty array?
	try {
		const databaseResponse = await RecipeModel.find()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default {
	createNewRecipe,
	getAllRecipes,
}