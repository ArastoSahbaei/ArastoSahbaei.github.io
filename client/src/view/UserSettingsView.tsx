import React, { useState } from 'react'

export const UserSettingsView: React.FC = (): JSX.Element => {
	const [data, setData] = useState({})

	return (
		<div>
			<h1>This is the userSettingsView</h1>
			<h1>Change password here:</h1>
			<input placeholder='current password' /> <br />
			<input placeholder='new password' /> <br />
			<button onClick={() => console.log('')}>OK</button>
		</div>
	)
}
