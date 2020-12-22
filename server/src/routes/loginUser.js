import jwt from 'jsonwebtoken'
import passport from 'passport'
import UserModel from '../models/User.model.js'

const login = app => {
	app.post('/user/login', (req, res, next) => {
		passport.authenticate('login', (err, users, info) => {
			if (err) { console.error(`error ${err}`) }
			if (info !== undefined) {
				console.error(info.message)
				if (info.message === 'bad username') {
					res.status(401).send(info.message)
				} else {
					res.status(403).send(info.message)
				}
			} else {
				req.logIn(users, () => {
					UserModel.findOne({ username: req.body.username })
						.then(user => {
							console.log('THIS IS THE USER:', user)
							const token = jwt.sign({ id: user._id }, 'jwtSecret.secret', { expiresIn: 60 * 60 })
							res.status(200).send({
								auth: true,
								token,
								message: 'user found & logged in',
								id: user._id
							})
						})
				})
			}
		})(req, res, next)
	})
}

export default {
	login
}