import RecipeModel from '../models/Recipe.model.js'
import UserModel from '../models/User.model.js'

const createNewRecipe = async (request, response) => {
	if (!request.body.title) {
		return response.status(400).send({ message: 'recipe must be included' })
	}

	const recipe = new RecipeModel({
		title: request.body.title || 'untitled recipe',
		duration: request.body.duration,
		ingrediens: request.body.ingrediens,
		description: request.body.description,
		originCountry: request.body.originCountry,
		views: request.body.views
	})

	try {
		//TODO: Change body.test and send userID in params
		const user = await UserModel.findById({ _id: request.body.test })
		console.log(user)
		user.createdRecipes.push(recipe)
		const createdRecipe = await user.save()
		response.status(201).send(createdRecipe)
	} catch (error) {
		response.status(500).send({ message: error.message })
	}

}

export default {
	createNewRecipe
}