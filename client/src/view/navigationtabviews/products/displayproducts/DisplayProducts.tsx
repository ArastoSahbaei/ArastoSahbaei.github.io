import './DisplayProducts.css'
import { useEffect, useState, useContext } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import heartImg from '../../../../shared/images/heart.svg'
import likedHeartImg from '../../../../shared/images/filledHeart.svg'

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

	const updateProductToFavourite = async (productId: any) => {
		const isProductAlreadyInFavouriteList = authenticatedUser.favouriteProducts?.includes(productId)
		if (isProductAlreadyInFavouriteList) {
			const removedFavouriteItem = authenticatedUser.favouriteProducts.filter((e: any) => e !== productId)
			setAuthenticatedUser({ ...authenticatedUser, favouriteProducts: removedFavouriteItem })
			await APIService.updateFavouriteProducts({ userId: authenticatedUser.id, favouriteProducts: removedFavouriteItem })
		} else {
			const addedfavouriteItem = authenticatedUser.favouriteProducts.concat([productId])
			setAuthenticatedUser({ ...authenticatedUser, favouriteProducts: addedfavouriteItem })
			await APIService.updateFavouriteProducts({ userId: authenticatedUser.id, favouriteProducts: addedfavouriteItem })
		}
	}

	const displayColoredHeartIfProductIsLiked = (productId: string) => {
		return authenticatedUser.favouriteProducts?.includes(productId)
			? <img className='addToFavourite' src={likedHeartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
			: <img className='addToFavourite' src={heartImg} alt={''} onClick={() => updateProductToFavourite(productId)} />
	}


	const displayData = () => {
		return products.map((x: any) =>
			<div className='displayProductWrapper' key={x?._id}>
				<div className='displayProductSubWrapper'>
					<img className='productImg' src={'https://picsum.photos/200/200'} alt='' onClick={() => history.push(RoutingPath.productDetailsView(x._id), x)} />
					<p className='pBrand'>Herbaman Co.</p>
					{displayColoredHeartIfProductIsLiked(x._id)}
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
