import React from 'react'
import './HamburgerButton.css'

export const HamburgerButton = (props: { drawerHandler: any }) => {
	return (
		<button className="toggle-button" onClick={() => props.drawerHandler(true)}>
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
			<div className="toggle-button__line" />
		</button>
	)
}
