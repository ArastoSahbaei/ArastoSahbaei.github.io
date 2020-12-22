import React, { useContext } from 'react'
import APIService from '../shared/api/service/APIService'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const SignInView: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			const response = await APIService.login(credentials)
			setAuthenticatedUser(response.data)
			history.push(RoutingPath.homeView)
		} catch (error) {
			console.log(error)
		}
	}

	const credentials = { username: 'arastoooo', password: 'arastoooo' }

	return (
		<div>
			<h1>This is the signin view</h1>
			<form>
				<input placeholder="username" /> <br />
				<input placeholder="password" />
				<button onClick={(event) => signIn(event)}>Sign in</button>
			</form>
		</div>
	)
}
