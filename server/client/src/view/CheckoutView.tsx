import { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const CheckoutView = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<h1>DU HAR ÄNNU INTE LAGT NÅGRA VAROR I DIN VARUKORG</h1>
		</div>
	)
}
