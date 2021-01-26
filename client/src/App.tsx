import React from 'react'
import './shared/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './shared/provider/UserProvider'
import { ToggleCartProvider } from './shared/provider/ToggleCartProvider'
import { CartProvider } from './shared/provider/CartProvider'

export const App = (): JSX.Element => {
	return (
		<ToggleCartProvider>
			<UserProvider>
				<CartProvider>
					<Routes>
						<Navigation />
					</Routes>
				</CartProvider>
			</UserProvider>
		</ToggleCartProvider>
	)
}
