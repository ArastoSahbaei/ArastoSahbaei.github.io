import React, { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { SearchRecipe } from '../../searchrecipe/SearchRecipe'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const [authenticatedUser,] = useContext(UserContext)
	const history = useHistory()

	const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
		return authenticatedUser.authenticated
			? <div className='navigationProfile'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}> Sign in </span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				onClick={() => history.push(RoutingPath.homeView)}
				src={Logotype}
				alt=''
				style={{ width: 100 }} />
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
			<span className='createRecipeNav'>create recipe</span>
			<div className='searchForRecipe'>
				<SearchRecipe />
			</div>
		</div>
	)
}
