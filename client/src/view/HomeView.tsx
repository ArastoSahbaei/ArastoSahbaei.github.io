import { useContext } from 'react'
import { EmailSubscription } from '../components/emailsubscription/EmailSubscription'
import { Footer } from '../components/footer/Footer'
import { UserContext } from '../shared/provider/UserProvider'

export const HomeView: React.FC = (): JSX.Element => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<h1> 1. Populäraste produkter </h1>
			<h1> 2. email sub </h1>
			<EmailSubscription />
			<h1> 3. footer </h1>
			<h1> 4. customer reviews </h1>
			<button onClick={() => console.log(authenticatedUser)}>authenticatedUser</button>
			<Footer />
		</div>
	)
}
