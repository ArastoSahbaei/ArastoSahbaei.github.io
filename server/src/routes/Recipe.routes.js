import RecipeController from '../controllers/Recipe.controller.js'
/* import Middlewares from '../middlewares/Middlewares.js' */

const routes = application => {
	application.post('/recipe', RecipeController.createNewRecipe)
}

export default { routes }