import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'

import Configuration from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
import UserRoutes from './src/routes/User.routes.js'
import registerRoute from './src/routes/regiserUser.js'
import passportConfig from './configurations/passport-config.js'

const application = express()
application.use(passport.initialize())
application.use(cors({ credentials: true }))
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use(helmet())
application.use(morgan('common'))

passportConfig.registerUserini()
passportConfig.login()

UserRoutes.routes(application)

registerRoute.register(application)



application.use(Middlewares.notFound)
application.use(Middlewares.errorHandler)


Configuration.connectToDatabase()
Configuration.connectToPort(application)