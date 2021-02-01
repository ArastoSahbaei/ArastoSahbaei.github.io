import './ProductDetailView.css'
import { useLocation } from 'react-router-dom'

export const ProductDetailView = () => {
	const location = useLocation<any>()
	return (
		<div>
			<h1>worked</h1>
			<button onClick={() => console.log(location.state)}>show location state</button> <br />
			<span>{location.state.price}</span> <br />
			<span>{location.state.productBrandName}</span> <br />
			<span>{location.state.productCategoryName}</span> <br />
			<span>{location.state.quantity}</span> <br />
			<span>{location.state.title}</span> <br />
		</div>
	)
}
