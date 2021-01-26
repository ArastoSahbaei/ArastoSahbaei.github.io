import './ShoppingBagToggler.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useContext } from 'react'
import { CartContext } from '../../shared/provider/CartProvider'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props
	const [cart, setCart] = useContext(CartContext)

	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	return (
		<div className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			<ul>
				{cart?.map((product: any) => <li key={product}> {product} </li>)}
			</ul>
			<button onClick={() => checkout()}>Go to checkout</button>
		</div>
	)
}
