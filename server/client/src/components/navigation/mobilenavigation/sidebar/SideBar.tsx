import React from 'react'
import './SideBar.css'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {

	return (
		<nav className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<h1 onClick={() => props.drawerHandler(false)}>Exit</h1>
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
