import React, { useEffect } from 'react'
import APIService from '../shared/api/service/APIService'

export const ResetPasswordView = () => {
	const getTokenFromURL = window.location.href.split('/').reverse()[0]

	useEffect(() => {
		APIService.forgotPassword()
	}, [getTokenFromURL])


	return (
		<div>
			<h1>This is the resetPasswordView</h1>
			<button onClick={() => alert(window.location.href.split('/').reverse()[0])}>x</button>
		</div>
	)
}
