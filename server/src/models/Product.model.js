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
	productCategoryName: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'productcategory',
		required: true
	}
}, { timestamps: true })

const ProductModel = mongoose.model('product', productSchema)
export default ProductModel