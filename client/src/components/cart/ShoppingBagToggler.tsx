import './ShoppingBagToggler.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)

	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}

	const removeProductFromCart = () => {
		console.log('')
	}

	return (
		<div className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			<ul>
				{authenticatedUser?.shoppingCart[0]?.products?.map((product: any, index: number) =>
					<div key={index}>
						<li onClick={() => removeProductFromCart()}> {product} </li>
					</div>
				)}
			</ul>
			<button onClick={() => checkout()}>Go to checkout</button>
			<button onClick={() => console.log(authenticatedUser.shoppingCart[0].products)}>authenticatedUser</button>
		</div>
	)
}