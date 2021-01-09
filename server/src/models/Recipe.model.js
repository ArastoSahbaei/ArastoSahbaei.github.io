import mongoose from 'mongoose'
const { Schema } = mongoose

const recipeSchema = Schema({
	title: String,
	duration: Number,
	ingrediens: String,
	description: String,
	originCountry: String,
	language: String,
	views: Number,
	createdByUser: [{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}]
}, {
	timestamps: true
})

const RecipeModel = mongoose.model('recipe', recipeSchema)
export default RecipeModel