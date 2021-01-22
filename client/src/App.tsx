import React from 'react'
import './shared/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './shared/provider/UserProvider'
import { ToggleCartProvider } from './shared/provider/ToggleCartProvider'

export const App = (): JSX.Element => {
	return (
		<ToggleCartProvider>
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</ToggleCartProvider>
	)
}
