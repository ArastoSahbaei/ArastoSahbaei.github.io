import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const { children } = props

	return (
		<BrowserRouter>
			<Suspense fallback={<h1>LOADING!!!!</h1>} />
			{children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
