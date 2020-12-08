import React from 'react'
import './Navigation.css'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'

export const Navigation = (): JSX.Element => {
	const { height, width } = useWindowDimensions()

	const displayNavigationBarDependingOnWindowSizeWidth = () => {
		return (width <= 1000) ? <MobileNavigation /> : <DesktopNavigation />
	}

	return (
		<div className="navigationWrapper">
			{displayNavigationBarDependingOnWindowSizeWidth()}
		</div>
	)
}
