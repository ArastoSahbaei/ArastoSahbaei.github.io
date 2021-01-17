import React from 'react'
import { DropdownProfile } from './dropdownprofile/DropdownProfile'
import userIcon from '../../shared/images/user.svg'
import './Profile.css'

export const Profile = (): JSX.Element => {

	return (
		<div className='profileWrapper'>
			<img className='profileImg'
				src={userIcon}
				alt={''} />
			<DropdownProfile />
		</div>
	)
}
