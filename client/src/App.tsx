import React from 'react'
import './shared/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './shared/provider/UserProvider'

export const App = (): JSX.Element => {
	return (
		<UserProvider>
			<Routes>
				<Navigation />
			</Routes>
		</UserProvider>
	)
}
