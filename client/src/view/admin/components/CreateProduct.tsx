import { useEffect, useState } from 'react'
import APIService from '../../../shared/api/service/APIService'
import { createNewProduct, productCategoryNameId } from '../../../shared/interface/Interface'

export const CreateProduct = () => {
	const [productCategories, setProductCategories] = useState<[productCategoryNameId]>([{ productCategoryName: '', _id: '' }])
	const [productBrands, setProductBrands] = useState<[any]>([{ productBrand: '', _id: '' }])
	const [product, setProduct] = useState<createNewProduct>({ title: '', price: 0, quantity: 0, productBrand: '', productCategory: '' })

	const fetchProductCategoriesData = async () => {
		const { data } = await APIService.getAllProductCategories()
		setProductCategories(data)
	}

	const fetchProductBrandsData = async () => {
		const { data } = await APIService.getAllProductBrands()
		setProductBrands(data)
	}

	const handleSelectedBrandChange = (event: any, target: keyof createNewProduct) => {
		const find = (productBrands.find(({ productBrandName }) => productBrandName === event.target.value))
		setProduct({ ...product, [target]: find?._id })
	}

	const handleSelectedCategoryChange = (event: any, target: keyof createNewProduct) => {
		const find = (productCategories.find(({ productCategoryName }) => productCategoryName === event.target.value))
		setProduct({ ...product, [target]: find?._id })
	}

	const selectCategory = () => {
		return <select onChange={(event) => handleSelectedCategoryChange(event, 'productCategory')} >
			{productCategories.map((x: productCategoryNameId) => <option key={x?._id}>{x?.productCategoryName}</option>)}
		</select>
	}

	const selectBrand = () => {
		return <select onChange={(event) => handleSelectedBrandChange(event, 'productBrand')} >
			{productBrands.map((x: any) => <option key={x?._id}>{x?.productBrandName}</option>)}
		</select>
	}

	useEffect(() => {
		fetchProductCategoriesData()
		fetchProductBrandsData()
	}, [])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewProduct) => {
		setProduct({ ...product, [target]: event.target.value })
	}

	return (
		<div>
			<h1>Create a new product:</h1>
			productCategory: {selectCategory()} <br />
				productBrand: {selectBrand()} <br />
			title: <input placeholder='title' onChange={event => handleChange(event, 'title')} /> <br />
			price: <input placeholder='price' onChange={event => handleChange(event, 'price')} /> <br />
			quantity: <input placeholder='quantity' onChange={event => handleChange(event, 'quantity')} /> <br />
			<button onClick={() => APIService.createProduct(product)}>Create Product</button>
		</div>
	)
}