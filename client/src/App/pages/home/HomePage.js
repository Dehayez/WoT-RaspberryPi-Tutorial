import { default as React, useEffect, useState } from 'react';
import { Canvas } from "react-three-fiber";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";

import * as Routes from '../../routes';

import { GAMES_FOR_HOME_PAGE_TITLE } from '../../assets/data'
import Animation from './Animation'

import './home.scss';

const HomePage = () => {

	// renders a new title every interval
	const [title, setTitle] = useState(GAMES_FOR_HOME_PAGE_TITLE[0])
	const array_lenght = GAMES_FOR_HOME_PAGE_TITLE.length;

	useEffect(() => {
		const interval = setInterval(() => {
			const random_int = Math.round( Math.random() * array_lenght );
			setTitle(GAMES_FOR_HOME_PAGE_TITLE[random_int]);
		}, 999);
		return () => clearInterval(interval);
	}, []);
 
	return (
		<div className="home">
			<div className="home__data">
				<h1>
					Artevelde Plays {" "}
					<TextLoop interval={1000}>
						<span>{title}</span>
						<span>{title}</span>
					</TextLoop>
				</h1>
				<p>Hey! Wij zijn Yentel De Hauwere en Jeroen Vervaeck en voor het vak Web Of Things hebben we een gebruiksvriendelijke tutorial gemaakt hoe je retro games speelt op een RaspberryPi</p>
				<div className="home__data-wrapper">
					<Link to={Routes.SETUP1}><p>Documentatie</p></Link>
					<Link to={Routes.INFO}><p>Info</p></Link>
				</div>
			</div>
			<div className="home__animation">
				<Canvas>
					<Animation />
				</Canvas>
			</div>
		</div>
	);
};

export default HomePage;
