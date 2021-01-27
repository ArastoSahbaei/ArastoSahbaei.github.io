import React, { useState, createContext } from 'react'

export const CartContext = createContext<any>(null)

export const CartProvider = (props: { children?: React.ReactChild }) => {
	const { children } = props
	const [cart, setCart] = useState<any>([])

	return (
		<CartContext.Provider value={[cart, setCart]}>
			{children}
		</CartContext.Provider>
	)
}