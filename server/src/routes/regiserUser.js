import passport from 'passport'
import UserModel from '../models/User.model.js'

const register = app => {
	app.post('/user/register', (req, res, next) => {
		passport.authenticate('register', (err, user, info) => {
			console.log('LOOOL', user)
			if (err) { console.error(err) }
			if (info !== undefined) {
				console.error(info.message)
				res.status(403).send(info.message)
			} else {
				req.logIn(user, error => {
					console.log('THIS IS LE USER:', user)
					console.log(req.body.email)
					const data = {
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						email: req.body.email,
						username: req.body.username,
					}
					console.log(data)
					UserModel.findOne({ where: data.username })
						.then(user => {
							console.log('THIS IS LE USER:', user)
							UserModel.update({
								first_name: data.first_name,
								last_name: data.last_name,
								username: data.username,
							}).then(() => {
								console.log('user created in db')
								res.status(200).send({ message: 'User was successfully created' })
							})
						})
				})
			}
		})(req, res, next)
	})
}

export default {
	register
}