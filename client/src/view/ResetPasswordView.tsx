import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import APIService from '../shared/api/service/APIService'
import { UserContext } from '../shared/provider/UserProvider'

export const ResetPasswordView: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [newPassword, setNewPassword] = useState<string>('')
	const [data, setData] = useState<any>({})
	const [, setAuthenticatedUser] = useContext(UserContext)
	const getTokenFromURL = window.location.href.split('/').reverse()[0]


	const requestNewPassword = async () => {
		const x = { password: newPassword, resetPasswordToken: getTokenFromURL }
		const response = await APIService.resetPassword(x)
		setData(response)
	}

	const loginUserIfPasswordGotReset = async () => {
		const loginCredentials = { username: data.data?.username, password: newPassword }
		if (data.status == 200) {
			const response = await APIService.login(loginCredentials)
			setAuthenticatedUser(response.data)
			console.log(response.data)
			history.push(RoutingPath.homeView)
		}
	}

	useEffect(() => {
		loginUserIfPasswordGotReset()
	}, [data])

	return (
		<div>
			<h1>This is the resetPasswordView</h1>
			<input placeholder='Your new password' onChange={(event) => setNewPassword(event.target.value)} /> <br />
			<button onClick={() => requestNewPassword()}>reset pw</button>
		</div>
	)
}
