import { default as React } from 'react';

import * as Routes from '../../../routes';

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
						<h3 className="step-left__title">USB-Stick voorbereiden</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Steek de USB-stick in de poort van je computer</li>
							<li className="step-left__list-text">Zorg dat de USB-stick volledig leeg is</li>
							<li className="step-left__list-text">Maak een nieuwe folder aan met naam ‘retropi’</li>
							<li className="step-left__list-text">Verwijder de USB-stick op een veilig manier van je computer</li>
						</ul>
						<Warning text="Zorg dat je USB-Stick leeg is"
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
