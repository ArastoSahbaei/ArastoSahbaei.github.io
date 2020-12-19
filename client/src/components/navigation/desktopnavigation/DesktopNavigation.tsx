import React from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()

	return (
		<div>
			<span onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
		</div>
	)
}
