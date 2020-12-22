import React, { useState } from 'react'
import APIService from '../shared/api/service/APIService'

export const SignInView: React.FC = (): JSX.Element => {
	const [, setUser] = useState()

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		const response = await APIService.login(credentials)
		setUser(response.data)
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
