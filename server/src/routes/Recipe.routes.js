import RecipeController from '../controllers/Recipe.controller.js'
/* import Middlewares from '../middlewares/Middlewares.js' */

const routes = application => {
	application.post('/recipe', RecipeController.createNewRecipe)
	application.get('/recipe', RecipeController.getAllRecipes)
}

export default { routes }