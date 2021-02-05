import shoppingbag from '../../../../shared/images/cart.svg'
import { useContext } from 'react'
import './CartToggler.css'
import { UserContext } from '../../../../shared/provider/UserProvider'


export const CartToggler = (props: { setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const { setIsShoppingBagOpen } = props
	const [authenticatedUser,] = useContext(UserContext)

	const displayAmountOfItemsInCart = () => {
		if (authenticatedUser?.shoppingCart?.products?.length != 0) {
			return <span>{authenticatedUser?.shoppingCart?.products?.length}</span>
		}
	}

	return (
		<>
			<img className="shoppingBagIcon"
				onClick={() => setIsShoppingBagOpen(true)}
				src={shoppingbag}
				alt=''
			/>
			<span>{displayAmountOfItemsInCart()}</span>
		</>
	)
}
