import React from 'react'
import './ShoppingBagToggler.css'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props

	return (
		<nav className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
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
