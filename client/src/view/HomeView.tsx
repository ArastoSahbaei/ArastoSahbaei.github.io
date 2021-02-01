import { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const HomeView: React.FC = (): JSX.Element => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<h1> 1. Populäraste produkter </h1>
			<h1> 2. email sub </h1>
			<h1> 3. footer </h1>
			<button onClick={() => console.log(authenticatedUser)}>authenticatedUser</button>
		</div>
	)
}
