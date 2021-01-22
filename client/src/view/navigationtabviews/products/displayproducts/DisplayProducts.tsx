import './DisplayProducts.css'
import { useEffect, useState } from 'react'
import APIService from '../../../../shared/api/service/APIService'

export const DisplayProducts = () => {
	const [products, setProducts] = useState<any>([])
	const [cart, setCart] = useState()

	const fetchData = async () => {
		const { data } = await APIService.getAllProducts()
		setProducts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const addToCart = () => {
		APIService.updateCart({ user: '600b274338e8e34e10cebf23', products: ['600b272738e8e34e10cebf20', '600aaf0f8da3b235685fc925', '600aaf0f8da3b235685fc925'] })
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
