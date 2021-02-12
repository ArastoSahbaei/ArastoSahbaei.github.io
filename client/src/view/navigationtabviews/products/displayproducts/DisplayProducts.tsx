import './DisplayProducts.css'
import { useEffect, useState, useContext } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import heartImg from '../../../../shared/images/heart.svg'

export const DisplayProducts = () => {
	const history = useHistory()
	const [products, setProducts] = useState<any>([])
	const [, setIsShoppingBagOpen] = useContext(ToggleCartContext)
	const [authenticatedUser, setAuthenticatedUser] = useContext<any>(UserContext)

	const fetchData = async () => {
		const { data } = await APIService.getAllProducts()
		setProducts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await APIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			setIsShoppingBagOpen(true)
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		return products.map((x: any) =>
			<div className='displayProductWrapper' key={x?._id}>
				<div className='displayProductSubWrapper' onClick={() => history.push(RoutingPath.productDetailsView(x._id), x)}>
					<img className='productImg' src={'https://picsum.photos/200/200'} alt='' />
					<p className='pBrand'>Herbaman Co.</p>
					<img className='heartFavourite' src={heartImg} alt={''} />
					<p className='pTitle'>{x?.title}</p>
					<p className='pPrice'>{x?.price} kr</p>
				</div>
				<div className='addToCartButton' onClick={() => addToCart(x._id)}>Addera till varukorgen</div>
			</div>)
	}

	return (
		<div className='displayProductsContainer'>
			{/* <button>FILTRERA</button>
			<button>SORTERA</button> */}
			{displayData()}
		</div>
	)
}
