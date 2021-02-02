import { CategoryFilter } from './categoryfilter/CategoryFilter'
import { DisplayProducts } from './displayproducts/DisplayProducts'

export const ProductsView = () => {

	return (
		<div>
			Sortera:
			<select>
				<option>Lägsta Pris</option>
				<option>Hösta Pris</option>
				<option>Bäst säljande</option>
				<option>Senast inkommet</option>
			</select>
			<CategoryFilter />
			<DisplayProducts />
		</div>
	)
}
