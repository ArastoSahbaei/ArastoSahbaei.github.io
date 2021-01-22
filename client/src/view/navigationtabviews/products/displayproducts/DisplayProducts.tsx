import './DisplayProducts.css'
import { useEffect, useState, useContext } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import { CartContext } from '../../../../shared/provider/ToggleCartProvider'

export const DisplayProducts = () => {
	const [products, setProducts] = useState<any>([])
	const [, setIsShoppingBagOpen] = useContext(CartContext)

	const fetchData = async () => {
		const { data } = await APIService.getAllProducts()
		setProducts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const addToCart = async () => {
		const response = await APIService.updateCart({
			user: '600b274338e8e34e10cebf23',
			products: ['600b272738e8e34e10cebf20', '600aaf0f8da3b235685fc925', '600aaf0f8da3b235685fc925']
		})
		console.log(response)
		setIsShoppingBagOpen(true)
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
