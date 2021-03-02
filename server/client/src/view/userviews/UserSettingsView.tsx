import React from 'react'

export const UserSettingsView: React.FC = (): JSX.Element => {

	return (
		<div>
			<h1>This is the userSettingsView</h1>
			<h1>Change password here:</h1>
			<input placeholder='current password' /> <br />
			<input placeholder='new password' /> <br />
		</div>
	)
}
