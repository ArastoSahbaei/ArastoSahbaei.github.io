import mongoose from 'mongoose'
const { Schema } = mongoose

const productCategory = Schema({
	productCategoryName: String,
	product: [{
		type: Schema.Types.ObjectId,
		ref: 'product',
	}]

}, { timestamps: true })

const ProductCategory = mongoose.model('productcategory', productCategory)
export default ProductCategory