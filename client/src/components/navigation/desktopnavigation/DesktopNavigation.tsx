import React, { useState, useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../shared/images/logotypeTemplate.svg'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import './DesktopNavigation.css'
import { CartToggler } from '../../cart/CartToggler'
import { ShoppingBag } from '../../shoppingbag/ShoppingBag'
import { BackDrop } from '../../backdrop/BackDrop'

export const DesktopNavigation: React.FC = (): JSX.Element => {
	const history = useHistory()
	const [authenticatedUser,] = useContext(UserContext)
	const [isShoppingBagOpen, setIsShoppingBagOpen] = useState<boolean>(false)

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
			<span className="1">Produkter1</span>
			<span className="2">Produkter2</span>
			<span className="3">Accessoarer</span>
			<span className="4">Nyheter</span>
			<span className="5">Guide</span>
			{displaySignInButtonOrUsernameDependingOnAuthentication()}
			<ShoppingBag setIsShoppingBagOpen={setIsShoppingBagOpen} />
			<CartToggler isShoppingBagOpen={isShoppingBagOpen} setIsShoppingBagOpen={setIsShoppingBagOpen} />
			{!isShoppingBagOpen || <BackDrop drawerHandler={setIsShoppingBagOpen} />}
		</div>
	)
}
