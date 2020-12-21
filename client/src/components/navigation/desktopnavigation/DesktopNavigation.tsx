import React from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()

	return (
		<div>
			<img onClick={() => history.push(RoutingPath.homeView)} src={Logotype} alt='' style={{ width: 100 }} />
			<span onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
		</div>
	)
}
