import React, { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { ShoppingBagToggler } from '../../cart/ShoppingBagToggler'
import { ShoppingBag } from '../../shoppingbag/ShoppingBag'
import { BackDrop } from '../../backdrop/BackDrop'
import { ToggleCartContext } from '../../../shared/provider/ToggleCartProvider'
import { DesktopNavigationTabs } from './desktopnavigatontabs/DesktopNavigationTabs'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useContext(ToggleCartContext)

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
				alt='' />
			<div className='desktopNavigationTabs'>
				<DesktopNavigationTabs />
			</div>
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
			<div className='navigationShoppingCart'>
				<ShoppingBag setIsShoppingBagOpen={setIsShoppingBagOpen} />
			</div>
			<ShoppingBagToggler isShoppingBagOpen={isShoppingBagOpen} setIsShoppingBagOpen={setIsShoppingBagOpen} />
			{!isShoppingBagOpen || <BackDrop drawerHandler={setIsShoppingBagOpen} />}
		</div>
	)
}
