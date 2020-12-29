import UserController from '../controllers/User.controller.js'
import Middlewares from '../middlewares/Middlewares.js'

const routes = application => {
	application.get('/rofl', Middlewares.checkToken, UserController.authenticatedRoute)
	application.post('/user/login', UserController.login)
	application.post('/user/register', UserController.registerNewUser)
	application.get('/user', UserController.getAllUsers)
	application.get('/user/:userId', UserController.getUserWithID)
	application.get('/searchuser', UserController.getUserWithQuery)
	application.put('/user/:userId', UserController.updateValuesOfExistingUser)
	application.delete('/user/:userId', UserController.deleteUserWithID)
	application.post('/forgotpassword', UserController.forgotPassword)
	application.put('/updatepassword', UserController.updatePassword)
	application.get('/reset', UserController.resetPassword)
}

export default { routes }