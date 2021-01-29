import shoppingbag from '../../shared/images/shoppingbag.svg'
import { useContext } from 'react'
import './ShoppingBag.css'
import { UserContext } from '../../shared/provider/UserProvider'


export const ShoppingBag = (props: { setIsShoppingBagOpen: (handler: boolean) => void }) => {
	const { setIsShoppingBagOpen } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<>
			<img className="shoppingBagIcon"
				onClick={() => setIsShoppingBagOpen(true)}
				src={shoppingbag}
				alt=''
			/>
			<span>{authenticatedUser?.shoppingCart[0]?.products?.length}</span>
		</>
	)
}
