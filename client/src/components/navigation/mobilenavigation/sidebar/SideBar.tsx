import React from 'react'
import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
	/* 	let drawerClasses = 'side-drawer'
		if (props.drawerIsOpen) { drawerClasses = 'side-drawer open' } */

	return (
		<nav className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<h1 onClick={() => props.drawerHandler(false)}>LOL</h1>
			<ul>
				<li>
					<a href="/">Products</a>
				</li>
				<li>
					<a href="/">Users</a>
				</li>
			</ul>
		</nav>
	)
}
