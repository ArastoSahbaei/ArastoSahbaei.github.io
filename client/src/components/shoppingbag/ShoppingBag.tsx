import React from 'react'
import shoppingbag from '../../shared/images/shoppingbag.svg'
import './ShoppingBag'


export const ShoppingBag = (props: { setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const { setIsShoppingBagOpen } = props

	return (
		<div>
			<img
				onClick={() => setIsShoppingBagOpen(true)}
				src={shoppingbag}
				alt=''
				style={{ width: 40 }} />
		</div>
	)
}
