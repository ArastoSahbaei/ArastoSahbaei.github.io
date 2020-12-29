import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		lowercase: true,
		required: [true, 'can\'t be blank'],
	},
	email: {
		type: String,
	},
	password: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date,
}, { timestamps: true, strict: true })


const UserModel = mongoose.model('user', userSchema)
export default UserModel