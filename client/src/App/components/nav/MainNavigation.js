import { default as React } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

import * as Routes from '../../routes';

import './nav.scss';

const MainNavigation = () => {

	const showNav = () => {
		console.log('selected nav view');
		document.getElementById('main').style = "display: none;";
		document.getElementById('nav').style = "display: block;";
	}
	const showMain = () => {
		console.log('selected main view');
		document.getElementById('main').style = "display: block;";
		document.getElementById('nav').style = "display: none;";
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
					<Link><h1>HOME</h1></Link>
					<Link><h1>DOCUMENTATION</h1></Link>
					<Link><h1>INFO</h1></Link>
					<Link><h1>CONTACT</h1></Link>
				</div>
			</div>
			
		</div>
	);
};

export default MainNavigation;
