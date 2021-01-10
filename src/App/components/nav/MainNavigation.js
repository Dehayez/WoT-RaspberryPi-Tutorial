import { default as React } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

import * as Routes from '../../routes';

import './nav.scss';

const MainNavigation = () => {

	const showNav = () => {
		document.getElementById('main').style = "display: none;";
		document.getElementById('nav').style = "display: block;";
		// HomePage logica
		if (window.location.href.split('/')[3] === "") {
			document.getElementsByClassName('home')[0].style = "display: none;" 
		}
	}
	const showMain = () => {
		document.getElementById('main').style = "display: block;";
		document.getElementById('nav').style = "display: none;";
		// HomePage logica
		if (window.location.href.split('/')[3] === "") {
			document.getElementsByClassName('home')[0].style = "display: flex;" 
		}
	}

	return (
		<div className="navigation-main">

			<div id="main" className="navigation-main__hamburger" onClick={showNav}>
				<FaBars size={42} />
			</div>

			<div id="nav" className="navigation-main__nav">
				<div className="navigation-main__nav-times" onClick={showMain}>
					<FaTimes size={42} />
				</div>
				<div className="navigation-main__nav-wrapper">
					<Link to={Routes.HOME} onClick={showMain}><h1>HOME</h1></Link>
					<Link to={Routes.SETUP1} onClick={showMain}><h1>1. INSTALLATIE RETROPIE</h1></Link>
					<Link to={Routes.GAMES1} onClick={showMain}><h1>2. GAMES TOEVOEGEN</h1></Link>
					<Link to={Routes.INFO} onClick={showMain}><h1>INFO</h1></Link>
					<Link to={Routes.CONTACT} onClick={showMain}><h1>CONTACT</h1></Link>
				</div>
			</div>
			
		</div>
	);
};

export default MainNavigation;
