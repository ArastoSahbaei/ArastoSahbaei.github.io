import mongoose from 'mongoose'
const { Schema } = mongoose

const productCategory = Schema({
	productCategoryName: String
}, { timestamps: true })

const ProductCategory = mongoose.model('productcategory', productCategory)
export default ProductCategory
