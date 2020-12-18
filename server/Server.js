import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import Configuration from './configurations/Configurations.js'

const app = express()
app.use(helmet())
app.use(morgan('common'))

Configuration.connectToDatabase()
Configuration.connectToPort(app)