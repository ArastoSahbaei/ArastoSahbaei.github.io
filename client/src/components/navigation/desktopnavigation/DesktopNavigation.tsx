import React, { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const [authenticatedUser,] = useContext(UserContext)
	const history = useHistory()

	const profile = () => {
		return <div onClick={() => history.push(RoutingPath.userSettingsView)}>
			<span>{authenticatedUser.username}</span>
			<img src={'https://thispersondoesnotexist.com/image'} alt='' style={{ width: 50 }} />
		</div>
	}

	const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
		return authenticatedUser.authenticated
			? profile()
			: <span onClick={() => history.push(RoutingPath.signInView)}> Sign in </span>
	}

	return (
		<div>
			<img onClick={() => history.push(RoutingPath.homeView)} src={Logotype} alt='' style={{ width: 100 }} />
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
		</div>
	)
}
