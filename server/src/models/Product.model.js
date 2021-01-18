import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = Schema({
	title: {
		type: String,
		unique: true, //Not working?
		require: true,
	},
	price: {
		type: Number,
		require: true
	},
	quantity: {
		type: Number,
		require: true
	},
	category: String //Seperate this because it will be easier to create
}, { timestamps: true })

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel