import './Cart.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import APIService from '../../shared/api/service/APIService'
import emptyCart from '../../shared/images/empty_cart.png'

export const Cart = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	const navigateToShop = () => {
		history.push(RoutingPath.productsView)
		props.setIsShoppingBagOpen(false)
	}

	const displayEmptyCart = () => {
		return <div>
			<img src={emptyCart} alt='' className='emptyCartImg' />
			<p>Your cart is empty.. <br /> Why not fill it with new designs?</p>
			<button onClick={() => navigateToShop()}>Butik</button> <br />
		</div >
	}

	const displayCartWithItems = () => {
		return <div>
			{authenticatedUser?.shoppingCart[0]?.products?.map(
				(product: string, index: number) =>
					<ul key={index}>
						<li onClick={() => removeProductFromCart(authenticatedUser?.shoppingCart[0]?.products, index)}> {product} </li>
					</ul>
			)}
			<button onClick={() => checkout()}>Go to checkout</button>
		</div>
	}

	const displayCart = () => {
		return authenticatedUser?.shoppingCart[0]?.products.length === 0
			? displayEmptyCart()
			: displayCartWithItems()
	}

	const removeProductFromCart = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]
		await APIService.updateCart({
			cartId: authenticatedUser.shoppingCart[0]?._id,
			products: newArray
		})
		setAuthenticatedUser({ ...authenticatedUser, shoppingCart: [{ ...authenticatedUser.shoppingCart[0], products: newArray }] })
	}

	return (
		<div className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			{displayCart()}
		</div>
	)
}

