import { useState } from 'react'
import APIService from '../../../shared/api/service/APIService'
import { createNewProductBrand } from '../../../shared/interface/Interface'


export const CreateProductBrand = () => {
	const [brandName, setBrandName] = useState<createNewProductBrand>({ productBrandName: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewProductBrand) => {
		setBrandName({ ...brandName, [target]: event.target.value })
	}

	return (
		<div>
			<h1>Create new ProductBrand:</h1> <br />
			<h1>{brandName.productBrandName}</h1>
			<input onChange={event => handleChange(event, 'productBrandName')} />
			<button onClick={() => APIService.createProductBrand(brandName)}>Create ProductBrand</button>
		</div>
	)
}
