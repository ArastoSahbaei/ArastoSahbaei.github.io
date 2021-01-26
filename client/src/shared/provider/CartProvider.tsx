import React, { useState, createContext } from 'react'

export const CartContext = createContext<any>(null)

export const CartProvider = (props: { children?: React.ReactChild }) => {
	const { children } = props
	const [cart, setCart] = useState<any>(['PRODUCT 1', 'PRODUCT 2', 'PRODUCT 3'])

	return (
		<CartContext.Provider value={[cart, setCart]}>
			{children}
		</CartContext.Provider>
	)
}