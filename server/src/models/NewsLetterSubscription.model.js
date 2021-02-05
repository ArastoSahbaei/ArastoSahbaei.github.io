import mongoose from 'mongoose'
const { Schema } = mongoose

const newsLetterSubscription = Schema({
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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		/* required: true */
	},
	recieveNewsLetters: {
		type: String,
		require: true
	}
}, { timestamps: true })

const NewsLetterSubscriptionModel = mongoose.model('newslettersubscription', newsLetterSubscription)
export default NewsLetterSubscriptionModel