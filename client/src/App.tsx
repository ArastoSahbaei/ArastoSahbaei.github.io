import React from 'react'
import './shared/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'

export const App = () => {
	return (
		<Routes>
			<Navigation />
		</Routes>
	)
}
