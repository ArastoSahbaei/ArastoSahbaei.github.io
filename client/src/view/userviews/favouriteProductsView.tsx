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
			<h1 onClick={() => console.log(authenticatedUser.favouriteProducts)}>MY FAVOURITES</h1>
			<p>Här finner du produkter som du har lagt till i mina favoriter. Lägg till artiklar i mina favoriter genom att klicka på  för tillhörande produkt.</p>
			{displayFavouriteProducts()}
		</div>
	)
}
