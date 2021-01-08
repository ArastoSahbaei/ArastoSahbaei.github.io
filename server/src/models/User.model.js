import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: {
		type: String, unique: true, allowNull: false, required: true, lowercase: true,
	},
	email: {
		type: String, unique: true, allowNull: false, require: true, lowercase: true, index: true, sparse: true
	},
	password: { type: String, require: true },
	resetPasswordToken: String,
	resetPasswordExpires: Date,
}, { timestamps: true, strict: true })


const UserModel = mongoose.model('user', userSchema)
export default UserModel