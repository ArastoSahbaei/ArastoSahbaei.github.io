import StatusCode from '../../configurations/StatusCode.js'
import ShoppingCartModel from '../models/ShoppingCart.model.js'

const addProduct = async (request, response) => {
	const shoppingCart = new ShoppingCartModel({ test: request.body.test })
	try {
		const databaseResponse = await shoppingCart.save()
		response.status(StatusCode.CREATED).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getShoppingCart = async (request, response) => {
	try {
		const databaseResponse = await ShoppingCartModel.find()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

export default {
	addProduct,
	getShoppingCart
}