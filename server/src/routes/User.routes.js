import UserController from '../controllers/User.controller.js'

const routes = application => {
	application.post('/user', UserController.registerNewUser)
	application.get('/user', UserController.getAllUsers)
	application.get('/user/:userId', UserController.getUserWithID)
	application.get('/searchuser', UserController.getUserWithQuery)
	application.put('/user/:userId', UserController.updateValuesOfExistingUser)
	application.delete('/user/:userId', UserController.deleteUserWithID)
}

export default { routes }