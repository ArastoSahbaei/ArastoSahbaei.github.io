import { useEffect, useState } from 'react'
import APIService from '../../../shared/api/service/APIService'
import { createNewProduct } from '../../../shared/interface/Interface'

interface productCategory {
	productCategoryName?: string
	_id: string
}

export const CreateProduct = () => {
	const [productCategories, setProductCategories] = useState<[productCategory]>([{ productCategoryName: '', _id: '' }])
	const [product, setProduct] = useState<createNewProduct>({ title: 'cream', price: 1337, quantity: 1337 })

	const fetchProductCategoriesData = async () => {
		const { data } = await APIService.getAllProductCategories()
		setProductCategories(data)
	}
	const display = () => {
		return productCategories.map((x: productCategory) => <h1 key={x?._id}>{x?.productCategoryName}</h1>)
	}

	useEffect(() => {
		fetchProductCategoriesData()
	}, [])

	return (
		<div>
			<h1>Create a new product:</h1>
			{display()}
			<button onClick={() => APIService.createProduct('60083dc4d251c634ac3fcc44', product)}>Create Product</button>
		</div>
	)
}


/* {
	"title": "bild",
	"price": 35,
	"quantity": 22
} */