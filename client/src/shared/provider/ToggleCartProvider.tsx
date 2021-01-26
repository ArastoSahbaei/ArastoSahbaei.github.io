import React, { useState, createContext } from 'react'

export const ToggleCartContext = createContext<any>(null)

export const ToggleCartProvider = (props: { children?: React.ReactChild }) => {
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useState<boolean>(false)
	const { children } = props

	return (
		<ToggleCartContext.Provider value={[isShoppingBagOpen, setIsShoppingBagOpen]}>
			{children}
		</ToggleCartContext.Provider>
	)
}