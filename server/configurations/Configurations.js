import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL
const PORT = process.env.PORT

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
		console.log('SUCESSFULLY CONNECTED TO DATABASE..')
	} catch (error) {
		console.log('ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE..')
		process.exit()
	}
}

const connectToPort = async (app) => {
	app.listen(PORT, () => {
		console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)
	})
}

export default {
	connectToDatabase,
	connectToPort
}