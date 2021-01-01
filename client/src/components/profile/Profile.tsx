import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'

export const Profile = (): JSX.Element => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className='profileWrapper' onClick={() => history.push(RoutingPath.userSettingsView)}>
			<img className='profileImg'
				src={'https://thispersondoesnotexist.com/image'}
				alt=''
				style={{ width: 50 }} />
			<span>{authenticatedUser.username}</span>
			<div className="profileDropdown">
				<span>Arasto Sahbaei</span> <br />
				<span>arasto.sahbaei@gmail.com</span>
				<hr />
				<span>Profile</span>
				<span>Settings</span>
				<span>Logout</span>
			</div>
		</div>
	)
}
