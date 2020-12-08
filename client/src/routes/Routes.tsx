import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'

export const Routes = (props: { children?: unknown }) => {

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
