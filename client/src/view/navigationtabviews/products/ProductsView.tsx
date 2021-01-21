import { CategoryFilter } from './categoryfilter/CategoryFilter'
import { DisplayProducts } from './displayproducts/DisplayProducts'

export const ProductsView = () => {

	return (
		<div>
			<CategoryFilter />
			<DisplayProducts />
		</div>
	)
}
