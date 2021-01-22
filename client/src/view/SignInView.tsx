import React, { useState, useContext } from 'react'
import APIService from '../shared/api/service/APIService'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { email, registerNewUser, loginCredentials } from '../shared/interface/Interface'
import LocalStorage from '../shared/cache/LocalStorage'

export const SignInView: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)
	const [registerUser, setRegisterUser] = useState<registerNewUser>({ username: '', password: '' })
	const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
	const [forgotPasswordEmail, setForgotPasswordEmail] = useState<email>({ email: '' })

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			const { data } = await APIService.login(loginCredentials)
			console.log(data)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			setAuthenticatedUser(data)
			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	}

	const register = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			await APIService.registerNewUser(registerUser)
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
			alert(error)
		}
	}

	const sendRecoveryEmail = async () => {
		try {
			await APIService.forgotPassword(forgotPasswordEmail)
			alert(`We've sent a recovery link to: ${forgotPasswordEmail.email}`)
		} catch (error) {
			console.log(error)
			alert('Error occured')
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

			<h1>Forgot your password?</h1>
			<input placeholder="Enter your email" onChange={(event) => setForgotPasswordEmail({ email: event.target.value })} />
			<button onClick={() => sendRecoveryEmail()}>Send recovery link</button>

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
