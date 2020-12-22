import React, { useState, useContext } from 'react'
import APIService from '../shared/api/service/APIService'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import registerNewUser from '../shared/interface/registerNewUser'
import loginCredentials from '../shared/interface/loginCredentials'

export const SignInView: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)
	const [registerUser, setRegisterUser] = useState<registerNewUser>({ username: '', password: '' })
	const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			const response = await APIService.login(loginCredentials)
			setAuthenticatedUser(response.data)
			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	}

	const register = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			await APIService.registerNewUser(registerUser)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form>
				<input placeholder="username" onChange={(event) => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />
				<button onClick={(event) => signIn(event)}>Sign in</button>
			</form>

			<hr />

			<h1>Register</h1>
			<form>
				<input placeholder="username" onChange={(event) => setRegisterUser({ ...registerUser, username: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setRegisterUser({ ...registerUser, password: event.target.value })} />
				<button onClick={(event) => register(event)}>Register</button>
			</form>

		</div>
	)
}
