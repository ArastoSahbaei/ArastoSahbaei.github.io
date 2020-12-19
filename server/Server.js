import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import Configuration from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'

const app = express()
app.use(helmet())
app.use(morgan('common'))

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)