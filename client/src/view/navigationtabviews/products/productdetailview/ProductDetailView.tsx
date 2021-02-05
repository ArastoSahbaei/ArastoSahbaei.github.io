import './ProductDetailView.css'
import { useLocation } from 'react-router-dom'
import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider'
import { useContext } from 'react'
import { UserContext } from '../../../../shared/provider/UserProvider'
import APIService from '../../../../shared/api/service/APIService'

export const ProductDetailView = () => {
	const location = useLocation<any>()
	const [, setIsShoppingBagOpen] = useContext(ToggleCartContext)
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await APIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			setIsShoppingBagOpen(true)
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>worked</h1>
			<button onClick={() => console.log(location.state)}>show location state</button> <br />
			<span>{location.state.price}</span> <br />
			<span>{location.state.productBrandName}</span> <br />
			<span>{location.state.productCategoryName}</span> <br />
			<span>{location.state.quantity}</span> <br />
			<span>{location.state.title}</span> <br />
			<button onClick={() => addToCart(location.state._id)}>Add to cart</button>
		</div>
	)
}
