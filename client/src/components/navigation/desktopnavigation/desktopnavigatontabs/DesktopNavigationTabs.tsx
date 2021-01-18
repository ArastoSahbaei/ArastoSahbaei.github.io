import React from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import './DesktopNavigationTabs.css'

export const DesktopNavigationTabs = () => {
	const history = useHistory()

	return (
		<ul className="ulTabsWrapper">
			<li className="liTabsWrapper" onClick={() => history.push(RoutingPath.productsView)}>CBD</li>
			<li className="liTabsWrapper" onClick={() => history.push(RoutingPath.accessoriesView)}>Accessoarer</li>
			<li className="liTabsWrapper" onClick={() => history.push(RoutingPath.brandsView)}>Varumärken</li>
			<li className="liTabsWrapper" onClick={() => history.push(RoutingPath.newsView)}>Nyheter</li>
			<li className="liTabsWrapper" onClick={() => history.push(RoutingPath.expertiseView)}>Expertis</li>
		</ul>
	)
}
