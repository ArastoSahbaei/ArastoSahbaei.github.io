import './ShoppingBagToggler.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import APIService from '../../shared/api/service/APIService'

export const ShoppingBagToggler = (props: { isShoppingBagOpen: boolean, setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const history = useHistory()
	const { isShoppingBagOpen, setIsShoppingBagOpen } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const checkout = () => {
		history.push(RoutingPath.checkoutView)
		setIsShoppingBagOpen(false)
	}


	const removeProductFromCart = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]
		await APIService.updateCart({
			cartId: authenticatedUser.shoppingCart[0]._id,
			products: newArray
		})
		setAuthenticatedUser({ ...authenticatedUser, shoppingCart: [{ ...authenticatedUser.shoppingCart[0], products: newArray }] })
	}

	return (
		<div className={isShoppingBagOpen ? 'cart-drawer open' : 'cart-drawer'}>
			<h1 onClick={() => setIsShoppingBagOpen(false)}>Exit</h1>
			<ul>
				{authenticatedUser?.shoppingCart[0]?.products?.map((product: string, index: number) =>
					<div key={index}>
						<li onClick={() => removeProductFromCart(authenticatedUser?.shoppingCart[0]?.products, index)}> {product} </li>
					</div>
				)}
			</ul>
			<button onClick={() => checkout()}>Go to checkout</button>
		</div>
	)
}

