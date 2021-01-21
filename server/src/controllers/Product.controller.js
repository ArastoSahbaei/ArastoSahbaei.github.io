import ProductModel from '../models/Product.model.js'
import ProductCategoryModel from '../models/ProductCategory.model.js'
import StatusCode from '../../configurations/StatusCode.js'

const createProduct = async (request, response) => {

	const product = new ProductModel({
		title: request.body.title,
		price: request.body.price,
		quantity: request.body.quantity,
		productCategoryName: request.query.productcategory,
	})

	try {
		const productCategory = await ProductCategoryModel.findById({ _id: request.query.productcategory })
		productCategory.product.push(product)
		await product.save()
		const databaseResponse = await productCategory.save()
		response.status(StatusCode.CREATED).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getAllProducts = async (request, response) => {
	try {
		const databaseResponse = await ProductModel.find()
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const updateProduct = async (request, response) => {
	try {
		if (!request.body) { return response.status(StatusCode.BAD_REQUEST).send({ message: 'Empty values were sent' }) }
		const databaseResponse = await ProductModel.findByIdAndUpdate(request.params.productId, {
			title: request.body.title,
			price: request.body.price,
			quantity: request.body.quantity,
			category: request.body.category,
		}, { new: true })
		response.status(StatusCode.OK).send(databaseResponse)
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to update values of the user with ID: ' + request.params.userId,
			error: error.message
		})
	}
}

const deleteProduct = async (request, response) => {
	try {
		const databaseResponse = await ProductModel.findByIdAndDelete(request.params.productId)
		response.status(StatusCode.OK).send({ message: 'Sucessfully deleted product', data: databaseResponse })
	} catch (error) {
		response.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occured while trying to delete user with the ID: ${request.params.userId}`,
			error: error.message
		})
	}
}

export default {
	createProduct,
	getAllProducts,
	updateProduct,
	deleteProduct
}