import './ShoppingBagToggler.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props

	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	return (
		<nav className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			{/* //TODO: Display items here */}
			<ul>
				<li>
					<a href="/">CartItem1</a>
				</li>
				<li>
					<a href="/">CartItem2</a>
				</li>
			</ul>
			<button onClick={() => checkout()}>Go to checkout</button>
		</nav>
	)
}
