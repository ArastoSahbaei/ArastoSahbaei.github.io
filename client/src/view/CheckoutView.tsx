import { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const CheckoutView = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<h1>This is the checkout view</h1>
		</div>
	)
}
