import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { DropdownProfile } from './dropdownprofile/DropdownProfile'
import userIcon from '../../shared/images/user.svg'
import './Profile.css'

export const Profile = (): JSX.Element => {
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<img className='profileImg'
				src={userIcon}
				alt={''} />
			{/* <span>{authenticatedUser.username}</span> */}
			<DropdownProfile />
		</div>
	)
}
