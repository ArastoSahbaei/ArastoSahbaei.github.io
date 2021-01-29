import { useContext } from 'react'
import { UserContext } from '../shared/provider/UserProvider'

export const HomeView: React.FC = (): JSX.Element => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<h1>HomePage</h1>
			<button onClick={() => console.log(authenticatedUser)}>authenticatedUser</button>
		</div>
	)
}
