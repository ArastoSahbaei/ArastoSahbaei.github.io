import React, { Suspense, useEffect, useContext } from 'react'
import APIService from '../shared/api/service/APIService'
import RoutingPath from './RoutingPath'
import LocalStorage from '../shared/cache/LocalStorage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UserContext } from '../shared/provider/UserProvider'
import { BackDrop } from '../components/backdrop/BackDrop'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserSettingsView } from '../view/UserSettingsView'
import { UserProfileView } from '../view/UserProfileView'
import { ResetPasswordView } from '../view/ResetPasswordView'
import { ProductsView } from '../view/navigationtabviews/products/ProductsView'
import { AccessoriesView } from '../view/navigationtabviews/accessories/AccessoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ExpertiseView } from '../view/navigationtabviews/expertise/ExpertiseView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { AdminView } from '../view/admin/AdminView'
import { CheckoutView } from '../view/CheckoutView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const { children } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const authenticationRequired = (navigateToViewifAuthenticated: any) => {
		return authenticatedUser.authenticated ? navigateToViewifAuthenticated : SignInView
	}

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: any) => {
		return authenticatedUser.authenticated ? HomeView : navigateToViewIfAuthenticated
	}

	const isTokenValid = (tokenExp: number) => {
		const currentTime = Math.floor(Date.now() / 1000)
		return (tokenExp >= currentTime)
	}

	const parseJWT = async () => {
		const token = localStorage.getItem(LocalStorage.authenticationToken)
		if (!token) { return }
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		const JWT = JSON.parse(window.atob(base64))

		if (isTokenValid(JWT.exp)) {
			// TODO: There has to be a better way to recieve the username? You cannot just do a getUserWithID like this?
			const response = await APIService.getUserWithID(JWT.id)
			setAuthenticatedUser({ authenticated: true, id: JWT.id, username: response.data.username })
		} else {
			setAuthenticatedUser({ authenticated: false, id: undefined, username: undefined })
			localStorage.removeItem(LocalStorage.authenticationToken)
		}
	}

	useEffect(() => {
		parseJWT()
	}, [])

	return (
		<BrowserRouter>
			<Suspense fallback={<BackDrop />} />
			{children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.userSettingsView} component={authenticationRequired(UserSettingsView)} />
				<Route exact path={RoutingPath.userProfileView} component={authenticationRequired(UserProfileView)} />
				<Route exact path={RoutingPath.forgotPasswordView} component={ResetPasswordView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />

				{/* Navigationbar tabs view */}
				<Route exact path={RoutingPath.productsView} component={ProductsView} />
				<Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.expertiseView} component={ExpertiseView} />
				<Route exact path={RoutingPath.newsView} component={NewsView} />

				{/* AdminView */}
				<Route exact path={RoutingPath.admin} component={AdminView} />

				{/* Default Tab */}
				<Route component={HomeView} />
			</Switch>
		</BrowserRouter>
	)
}
