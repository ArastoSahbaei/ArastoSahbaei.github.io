import { useEffect, useState } from 'react'
import APIService from '../../../shared/api/service/APIService'
import { createNewProduct, productCategoryNameId } from '../../../shared/interface/Interface'

export const CreateProduct = () => {
	const [productCategories, setProductCategories] = useState<[productCategoryNameId]>([{ productCategoryName: '', _id: '' }])
	const [product, setProduct] = useState<createNewProduct>({ title: 'cream', price: 1337, quantity: 1337 })
	const [selectedCategoryId, setSelectedCategoryId] = useState<any>('')

	const fetchProductCategoriesData = async () => {
		const { data } = await APIService.getAllProductCategories()
		setProductCategories(data)
	}

	const getCategoryIDfromSelectedOption = (selected: any) => {
		const find = (productCategories.find(({ productCategoryName }) => productCategoryName === selected))
		setSelectedCategoryId(find?._id)
	}

	const selectCategory = () => {
		return <select onChange={(event) => getCategoryIDfromSelectedOption(event.target.value)} >
			{productCategories.map((x: productCategoryNameId) => <option key={x?._id}>{x?.productCategoryName}</option>)}
		</select>
	}

	useEffect(() => {
		fetchProductCategoriesData()
	}, [])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewProduct) => {
		const newValue: number = parseInt(event.target.value)
		setProduct({ ...product, [target]: newValue })
	}

	return (
		<div>
			<h1>Create a new product:</h1>
			{selectCategory()} <br />
			title: <input placeholder='title' onChange={event => setProduct({ ...product, title: event.target.value })} /> <br />
			price: <input placeholder='price' onChange={event => handleChange(event, 'price')} /> <br />
			quantity: <input placeholder='quantity' onChange={event => handleChange(event, 'quantity')} /> <br />
			<button onClick={() => APIService.createProduct(selectedCategoryId, product)}>Create Product</button>
		</div>
	)
}