import React, { useState } from 'react'
import './CartToggler.css'

export const CartToggler = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(true)
	return (
		<nav className={drawerIsOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setDrawerIsOpen(false)}>Exit</h1>
			{/* //TODO: Display items here */}
			<ul>
				<li>
					<a href="/">CartItem1</a>
				</li>
				<li>
					<a href="/">CartItem2</a>
				</li>
			</ul>
		</nav>
	)
}
