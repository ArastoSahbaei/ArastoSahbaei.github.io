import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: String,
	password: String
}, { timestamps: true })


const UserModel = mongoose.model('user', userSchema)
export default UserModel