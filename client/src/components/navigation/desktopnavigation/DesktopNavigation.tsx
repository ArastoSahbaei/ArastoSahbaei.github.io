import React, { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { Cart } from '../../cart/Cart'
import { CartToggler } from './carttoggler/CartToggler'
import { BackDrop } from '../../backdrop/BackDrop'
import { ToggleCartContext } from '../../../shared/provider/ToggleCartProvider'
import { DesktopNavigationTabs } from './desktopnavigatontabs/DesktopNavigationTabs'
import heartImg from '../../../shared/images/like.svg'
import AuthenticatedPath from '../../../routes/AuthenticatedPath'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useContext(ToggleCartContext)

	const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
		return authenticatedUser.authenticated
			? <div className='navigationProfile'> <Profile /> </div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}> Sign in </span>
	}

	const displayAmountOfFavouriteProducts = () => {
		if (authenticatedUser?.favouriteProducts?.length != 0) {
			return <span className='navHeartCounter'>{authenticatedUser.favouriteProducts?.length}</span>
		}
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype'
				onClick={() => history.push(RoutingPath.homeView)}
				src={Logotype}
				alt='' />
			<div className='desktopNavigationTabs'>
				<DesktopNavigationTabs />
			</div>
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
			<div className='navHeartWrapper'>
				<img className='navHeart' src={heartImg} alt={''} onClick={() => history.push(AuthenticatedPath.favouriteProductsView)} />
				{displayAmountOfFavouriteProducts()}
			</div>
			<div className='navigationShoppingCart'>
				<CartToggler setIsShoppingBagOpen={setIsShoppingBagOpen} />
			</div>
			<Cart isShoppingBagOpen={isShoppingBagOpen} setIsShoppingBagOpen={setIsShoppingBagOpen} />
			{!isShoppingBagOpen || <BackDrop drawerHandler={setIsShoppingBagOpen} />}
			<button onClick={() => console.log(authenticatedUser)}>authenticatedUser</button>
		</div>
	)
}
