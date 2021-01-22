import { CreateProduct } from './components/CreateProduct'
import { CreateProductBrand } from './components/CreateProductBrand'
import { CreateProductCategory } from './components/CreateProductCategory'

export const AdminView = () => {
	return (
		<>
			<CreateProductCategory /> <hr />
			<CreateProductBrand /> <hr />
			<CreateProduct /> <hr />
		</>
	)
}
