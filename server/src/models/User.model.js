import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		required: true,
		lowercase: true,
	},

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
	name: {
		firstName: String,
		lastName: String
	},
	addresses: [{
		street: String,
		city: String,
		country: String,
		zipCode: String
	}],
	phone: String,
	creditCard: {
		method: String,
		number: String
	}


}, { timestamps: true, strict: true })


const UserModel = mongoose.model('user', userSchema)
export default UserModel