import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { DropdownProfile } from './dropdownprofile/DropdownProfile'
import './Profile.css'

export const Profile = (): JSX.Element => {
	const [authenticatedUser,] = useContext(UserContext)

	return (
		<div className='profileWrapper'>
			<img className='profileImg'
				src={'https://thispersondoesnotexist.com/image'}
				alt={''} />
			<span>{authenticatedUser.username}</span>
			<DropdownProfile />
		</div>
	)
}
