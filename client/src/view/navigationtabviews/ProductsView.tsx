import { useEffect, useState } from 'react'
import APIService from '../../shared/api/service/APIService'

export const ProductsView = () => {
	const [products, setProducts] = useState<any>([])

	const fetchData = async () => {
		const { data } = await APIService.getAllProducts()
		setProducts(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const displayData = () => {
		return products.map((x: any) =>
			<div key={x?._id}>
				<img src={'https://picsum.photos/200/200'} alt='' />
				<p>{x?.title}</p>
				<p>Brand Name</p>
				<p>{x?.price} kr</p>
			</div>)
	}

	return (
		<div>
			{displayData()}
			<button onClick={() => console.log(products)}>xx</button>
		</div>
	)
}
