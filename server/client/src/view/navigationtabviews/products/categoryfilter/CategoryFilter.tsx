import { useEffect, useState } from 'react'
import APIService from '../../../../shared/api/service/APIService'
import './CategoryFilter.css'

export const CategoryFilter = () => {
	const [productCategories, setProductCategories] = useState([])

	const fetchData = async () => {
		const { data } = await APIService.getAllProductCategories()
		console.log(data)
		setProductCategories(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	productCategories.map((x: any) => x.productCategoryName)

	return (
		<ul className='catergoryFilterWrapper'>
			<li className='categoryFilterLI'>Alla Produkter</li>
			{
				productCategories.map((x: any, i: number) => <li className='categoryFilterLI' key={i}> {x.productCategoryName} </li>)
			}
		</ul >
	)
}
