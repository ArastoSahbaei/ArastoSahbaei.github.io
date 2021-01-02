import React from 'react'
import './DropdownProfile.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DropdownProfile = () => {
	const history = useHistory()

	return (
		<div className="profileDropdown">
			<span>Arasto Sahbaei</span> <br />
			<span>arasto.sahbaei@gmail.com</span>
			<hr />
			<span onClick={() => history.push(RoutingPath.userProfileView)}>Profile</span>
			<span>My Recipes</span>
			<span>Saved Recipes</span>
			<span onClick={() => history.push(RoutingPath.userSettingsView)}>Settings</span>
			<span>Logout</span>
		</div>
	)
}
