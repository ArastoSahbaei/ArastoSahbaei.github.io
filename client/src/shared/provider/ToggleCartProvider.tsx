import React, { useState, createContext } from 'react'

export const CartContext = createContext<any>(null)

export const ToggleCartProvider = (props: { children?: React.ReactChild }) => {
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useState<boolean>(false)
	const { children } = props

	return (
		<CartContext.Provider value={[isShoppingBagOpen, setIsShoppingBagOpen]}>
			{children}
		</CartContext.Provider>
	)
}