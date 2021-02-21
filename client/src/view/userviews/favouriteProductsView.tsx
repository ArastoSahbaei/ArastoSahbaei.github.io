import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const favouriteProductsView = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const displayFavouriteProducts = () => {
		return (
			<div>
				{authenticatedUser.favouriteProducts.map((x: any) => <div key={x.title}>{x.title}</div>)}
			</div>
		)
	}

	return (
		<div>
			<h1 onClick={() => console.log(authenticatedUser.favouriteProducts)}>Display the products that user has liked</h1>
			<p>Vad händer om man tar bort en produkt som en user har i likedProducts?</p>
			{displayFavouriteProducts()}
		</div>
	)
}
