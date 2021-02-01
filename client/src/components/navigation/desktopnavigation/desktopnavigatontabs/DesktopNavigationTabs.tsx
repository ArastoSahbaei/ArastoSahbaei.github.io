import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import './DesktopNavigationTabs.css'

export const DesktopNavigationTabs = () => {
	const history = useHistory()

	return (
		<ul className="ulTabsWrapper">
			<li className="liTabs" onClick={() => history.push(RoutingPath.productsView)}>Butik</li>
			<li className="liTabs" onClick={() => history.push(RoutingPath.accessoriesView)}>Accessoarer</li>
			<li className="liTabs" onClick={() => history.push(RoutingPath.brandsView)}>Varumärken</li>
			<li className="liTabs" onClick={() => history.push(RoutingPath.newsView)}>Nyheter</li>
			<li className="liTabs" onClick={() => history.push(RoutingPath.expertiseView)}>Expertis</li>
		</ul>
	)
}
