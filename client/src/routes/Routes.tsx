import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const { children } = props

	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
