import jwt from 'jsonwebtoken'
import passport from 'passport'
import UserModel from '../models/User.model.js'
import StatusCode from '../../configurations/StatusCode.js'

const login = app => {
	app.post('/user/login', (request, response, next) => {
		passport.authenticate('login', (err, users, info) => {
			/* 	if (err) { console.error(`error ${err}`) } */
			if (info !== undefined) {
				info.message === 'bad username'
					? response.status(StatusCode.UNAUTHORIZED).send(info.message)
					: response.status(StatusCode.FORBIDDEN).send(info.message)
			} else {
				request.logIn(users, () => {
					UserModel.findOne({ username: request.body.username })
						.then(user => {
							const token = jwt.sign({ id: user._id }, 'jwtSecret.secret', { expiresIn: 60 * 60 })
							response.status(200).send({
								authenticated: true,
								token,
								username: user.username,
								id: user._id
							})
						})
				})
			}
		})(request, response, next)
	})
}

export default {
	login
}