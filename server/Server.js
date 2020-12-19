import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import Configuration from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import UserRoutes from './src/routes/User.routes.js'

const application = express()
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use(helmet())
application.use(morgan('common'))

UserRoutes.routes(application)
application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(application)