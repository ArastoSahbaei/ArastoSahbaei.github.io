import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
/* const { DATABASE_URL, PORT } = process.env */
/* TODO: Change these later */
const DATABASE_URL = 'mongodb://localhost/databasename'
const PORT = 3001

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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