import './Footer.css'
import { NavLink } from 'react-router-dom'
import MapIcon from '../../shared/images/map_icon.svg'
import CopyRight from '../../shared/images/copyright.svg'


export const Footer = () => {
	return (
		<div className="footerContainer">
			<ol className="OLhelp">
				<li className="OLhelpTitle">Information</li>
				<NavLink to="/checkout">
					<li className="helpLI"><span>Cookies</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="helpLI"><span>Köpvilkor</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="helpLI"><span>Medlemsvilkor</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="helpLI"><span>Integritetspolicy</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="helpLI"><span>Returnera en vara</span></li>
				</NavLink>
			</ol>

			<ol className="OLAbout">
				<li className="OLAboutTitle">Hampa.io</li>
				<NavLink to="/checkout">
					<li className="aboutLI"><span>Om Oss</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="aboutLI"><span>Miljöarbete</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="aboutLI"><span>Press & Media</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="aboutLI"><span>Jobb</span></li>
				</NavLink>
				<NavLink to="/checkout">
					<li className="aboutLI"><span>App</span></li>
				</NavLink>
			</ol>

			<ol className="OLContact">
				<li className="OLContactTitle">Kontakt</li>
				<NavLink to="/kontakt">
					<li className="ContactLI"><span>Kontaktform</span></li>
				</NavLink>
				<li className="ContactLI">Direktlinje +46 722 92 1983</li>
				<li className="ContactLIminor">Veckodagar: 10:00 - 23:00</li>
				<li className="ContactLIminor">Helgdagar: 12:00 - 16:00</li>
			</ol>
			{/* 
			<ol className="OLConnect">
				<li>Connect with us!</li>
				<li><SocialMedia /></li>
			</ol> */}

			<ol className="OLCompany">
				<li className="footerList"> <img className="mapIcon" src={MapIcon} alt="" /> Moms incubatorgatan 47B, Göteborg, Sverige.</li> <br />
				<li className="footerList"> <img className="copyRightIcon" src={CopyRight} alt="" />  Upphovsrätt 2021, © HAMPAio AB.</li>
			</ol>
		</div>
	)
}
