import React from 'react'
import shoppingbag from '../../shared/images/shoppingbag.svg'
import './ShoppingBag.css'


export const ShoppingBag = (props: { setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const { setIsShoppingBagOpen } = props

	return (
		<>
			<img className="shoppingBagIcon"
				onClick={() => setIsShoppingBagOpen(true)}
				src={shoppingbag}
				alt=''
			/>
		</>
	)
}
