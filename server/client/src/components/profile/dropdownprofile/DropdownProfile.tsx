import { useContext } from 'react'
import './DropdownProfile.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import LocalStorage from '../../../shared/cache/LocalStorage'
import heartImg from '../../../shared/images/like.svg'

export const DropdownProfile = () => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const logout = () => {
		setAuthenticatedUser({
			_id: undefined,
			username: undefined,
			token: undefined,
			authenticated: false,
			cartId: undefined,
			shoppingCart:
				{ products: [] }
			,
			newsLetterSubscription: {
				recieveNewsLetters: false,
			},
			favouriteProducts: []
		})
		localStorage.removeItem(LocalStorage.authenticationToken)
		history.push(RoutingPath.homeView)
	}

	return (
		<div className="profileDropdown">
			<span>Arasto Sahbaei</span> <br />
			<span>arasto.sahbaei@gmail.com</span>
			<hr />
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userProfileView)}>Profil</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Inställningar</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Sparade Produkter</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => logout()}>Logga ut</span>
			</div>
			<hr />
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Språk: Svenska</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Plats: Sverige</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Data & GDPR</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Hjälp</span>
			</div>
			<div className='dropDownProfileRowWrapper'>
				<img className='profileDropDownRowImg' src={heartImg} alt={''} />
				<span onClick={() => history.push(RoutingPath.userSettingsView)}>Skicka Feedback</span>
			</div>
		</div>
	)
}
