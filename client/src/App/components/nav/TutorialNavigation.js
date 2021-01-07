import { default as React } from 'react';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../routes';

import './nav.scss';

const TutorialNavigation = ({ text1, text2, text3, text4, text5, link1, link2, link3, link4, link5 }) => {


	return (
		<div className="navigation-tutorial-wrapper">
			<nav className="navigation-tutorial">
				<NavLink to={link1} className="navigation-tutorial__link" activeClassName="navigation-tutorial__link--active">
					{text1}
				</NavLink>
				<NavLink to={link2}  className="navigation-tutorial__link" activeClassName="navigation-tutorial__link--active">
					{text2}
				</NavLink>
				<NavLink to={link3}  className="navigation-tutorial__link" activeClassName="navigation-tutorial__link--active">
					{text3}
				</NavLink>
				<NavLink to={link4}  className="navigation-tutorial__link" activeClassName="navigation-tutorial__link--active">
					{text4}
				</NavLink>
				<NavLink to={link5}  className="navigation-tutorial__link" activeClassName="navigation-tutorial__link--active">
					{text5}
				</NavLink>
			</nav>
		</div>
	);
};

export default TutorialNavigation;
