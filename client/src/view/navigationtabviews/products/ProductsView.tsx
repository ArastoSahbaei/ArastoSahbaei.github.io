import { CategoryFilter } from './categoryfilter/CategoryFilter'
import { DisplayProducts } from './displayproducts/DisplayProducts'
import './ProductsView.css'

export const ProductsView = () => {

	return (
		<div>
			<div className='productViewTitleWrapper'>
				<p className='productViewTitle'>Hampa.io</p>
				<p className='productViewSubTitle'>
					Explore our curated collection of homewares made in Australia and Japan. <br />
				From candles and pottery to organic towels and Japanese pairing knives, <br />
				each piece has been thoughtfully selected. <br />
				</p>
			</div>
			{/* 	Sortera:
			<select>
				<option>Lägsta Pris</option>
				<option>Hösta Pris</option>
				<option>Bäst säljande</option>
				<option>Senast inkommet</option>
			</select> */}
			<CategoryFilter />
			<br />
			<br />
			<br />
			<br />
			<DisplayProducts />
		</div>
	)
}
