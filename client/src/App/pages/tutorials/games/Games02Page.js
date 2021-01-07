import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Games02Page = () => {
	return (
		<div className="games02">
			<NextLeft route={Routes.GAMES1} />
			<NextRight route={Routes.GAMES3} />
			<TutorialNavigation 
				text1="Intro" 
				text2="Voorbereiding"
				text3="Cofigureren"
				text4="ROMS Downloaden"
				text5="Playtime"

				link1="/games/1" 
				link2="/games/2"
				link3="/games/3"
				link4="/games/4"
				link5="/games/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col sm={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">Download de RetroPi software</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Navigeer naar deze <a href="https://retropie.org.uk/download/">link</a> </li>
							<li className="step-left__list-text">Download de versie van RetroPi die compatibel is met de versie van jouw RaspberryPi 3 of 4 </li>
							<li className="step-left__list-text">Sla dit bestand op waar het makkelijk te bereiken is, bijvoorbeeld jouw bureaublad/desktop</li>
						</ul>
						<Warning text="De versie van jouw RaspberryPi is te vergelijken met het aantal logo's op je upboot scherm."
						/>
					</Col>

					<Col sm={5}  className="step-right">

					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games02Page;
