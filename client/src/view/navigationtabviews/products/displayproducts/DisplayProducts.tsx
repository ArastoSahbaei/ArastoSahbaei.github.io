import './DisplayProducts.css'
import { useEffect, useState, useContext } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import { CartContext } from '../../../../shared/provider/CartProvider'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider'

export const DisplayProducts = () => {
	const [products, setProducts] = useState<any>([])
	const [, setIsShoppingBagOpen] = useContext(ToggleCartContext)
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)
	const [cart, setCart] = useContext<any>(CartContext)

	const fetchData = async () => {
		const { data } = await APIService.getAllProducts()
		setProducts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const addToCart = async () => {
		try {
			const { data } = await APIService.updateCart({
				user: authenticatedUser.id,
				products: ['600b272738e8e34e10cebf20', '600aaf0f8da3b235685fc925', '600aaf0f8da3b235685fc925']
			})
			console.log(data)
			setCart(data.shoppingCart)
			setIsShoppingBagOpen(true)
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: data.shoppingCart })
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		return products.map((x: any) =>
			<div className='displayProductWrapper' key={x?._id}>
				<img src={'https://picsum.photos/200/200'} alt='' />
				<p>{x?.title}</p>
				<p>Brand Name</p>
				<p>{x?.price} kr</p>
				<button onClick={() => addToCart()}>Lägg till i varukorg</button>
			</div>)
	}

	return (
		<div>
			{displayData()}
		</div>
	)
}
