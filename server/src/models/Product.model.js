import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = Schema({
	title: String,
	price: Number,
	quantity: Number
}, { timestamps: true })

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel