import APIService from '../../shared/api/service/APIService'

export const AdminView = () => {
	return (
		<div>
			{/* GET ALL PRODUCTCATEGORIES */}
			<h1>Create new ProductCategory:</h1> <br />
			<button onClick={() => APIService.createProductCategory({ productCategoryName: 'Strawberries dude' })}>Create ProductCategory</button>
		</div>
	)
}
