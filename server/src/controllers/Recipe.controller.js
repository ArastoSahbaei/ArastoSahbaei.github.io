import RecipeModel from '../models/Recipe.model.js'

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
		const createdRecipe = await recipe.save()
		response.send(createdRecipe)
	} catch (error) {
		response.status(500).send({ message: error.message })
	}

}

export default {
	createNewRecipe
}