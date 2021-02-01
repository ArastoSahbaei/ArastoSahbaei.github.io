const signInView = '/signin'
const homeView = '/'
const userSettingsView = '/user/settings'
const userProfileView = '/user/profile'
const forgotPasswordView = '/reset/:token'
const accessoriesView = '/product/accessories'
const brandsView = '/brands'
const expertiseView = '/expertise'
const newsView = '/news'
const productsView = '/product'
const checkoutView = '/checkout'
const admin = '/admin'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }


export default {
	signInView,
	homeView,
	userSettingsView,
	userProfileView,
	forgotPasswordView,
	accessoriesView,
	brandsView,
	expertiseView,
	newsView,
	productsView,
	checkoutView,
	admin,
	productDetailsView,
}