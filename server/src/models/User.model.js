import mongoose from 'mongoose'
const { Schema } = mongoose


const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		required: true,
		lowercase: true,
	},
	createdRecipes: [{
		type: Schema.Types.ObjectId,
		ref: 'recipe'
	}],
	email: {
		type: String,
		unique: true,
		allowNull: false,
		require: true,
		lowercase: true,
		match: [/\S+@\S+\.\S+/, 'is invalid'],
		index: true,
		sparse: true
	},
	password: { type: String, require: true },
	resetPasswordToken: String,
	resetPasswordExpires: Date,
	first_name: String,
	last_name: String,
	bio: String,
	image: String,

}, { timestamps: true, strict: true })


const UserModel = mongoose.model('user', userSchema)
export default UserModel