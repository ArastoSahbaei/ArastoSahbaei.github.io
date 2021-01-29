import './ShoppingBagToggler.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useContext } from 'react'
import { CartContext } from '../../shared/provider/CartProvider'
import { UserContext } from '../../shared/provider/UserProvider'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props
	const [cart, setCart] = useContext(CartContext)
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)



	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	return (
		<div className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			<ul>
				{authenticatedUser?.shoppingCart[0]?.products?.map((product: any, index: number) => <li key={index}> {product} </li>)}
			</ul>
			<button onClick={() => checkout()}>Go to checkout</button>
			<button onClick={() => console.log(authenticatedUser.shoppingCart[0].products)}>authenticatedUser</button>
		</div>
	)
}