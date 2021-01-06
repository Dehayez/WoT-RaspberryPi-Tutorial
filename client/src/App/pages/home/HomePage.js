import { default as React } from 'react';

import * as Routes from '../../routes';

import { GAMES_FOR_HOME_PAGE_TITLE } from '../../assets/data'

import './home.scss';

const HomePage = () => {

	console.log(GAMES_FOR_HOME_PAGE_TITLE);

	

	return (
		<div className="home">
			<div className="home__data">
				<h1>Artevelde Plays ...</h1>
				<p>Hey! Wij zijn Yentel De Hauwere en Jeroen Vervaeck en voor het vak Web Of Things hebben we een gebruiksvriendelijke tutorial gemaakt hoe je retro games speelt op een RaspberryPi</p>
				<div className="home__data-wrapper">
					wip buttons
				</div>
			</div>
			<div className="home__animation"></div>
		</div>
	);
};

export default HomePage;
