import { CreateProduct } from './components/CreateProduct'
import { CreateProductCategory } from './components/CreateProductCategory'

export const AdminView = () => {
	return (
		<>
			<CreateProductCategory /> <hr />
			<CreateProduct /> <hr />
		</>
	)
}
