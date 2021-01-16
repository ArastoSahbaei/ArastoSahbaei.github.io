import React, { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)

	const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
		return authenticatedUser.authenticated
			? <div className='navigationProfile'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}> Sign in </span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				onClick={() => history.push(RoutingPath.homeView)}
				src={Logotype}
				alt='' />
			<span className="1">Produkter1</span>
			<span className="2">Produkter2</span>
			<span className="3">Accessoarer</span>
			<span className="4">Nyheter</span>
			<span className="5">Guide</span>
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
			<span>CartLogo</span>
		</div>
	)
}
