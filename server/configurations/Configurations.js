import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {})
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