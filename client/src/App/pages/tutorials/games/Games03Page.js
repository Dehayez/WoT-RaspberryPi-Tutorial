import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import {Container, Row, Col} from 'react-bootstrap';

import { FaRaspberryPi } from 'react-icons/fa';

const Games03Page = () => {
	return (
		<div className="games03">
			<NextLeft route={Routes.GAMES2} />
			<NextRight route={Routes.GAMES4} />
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
						<FaRaspberryPi className="icon-rbp"/>
						<h3 className="step-left__title">USB-Stick configureren</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Steek de USB-stick in de poort van je RaspberryPi</li>
							<li className="step-left__list-text">Start de RaspberryPi op door de stroomtoevoer in te steken</li>
							<li className="step-left__list-text">Wacht enkele minuutten zodat RetroPi de tijd heeft om de nodige bestanden naar de USB-stick te schrijven</li>
							<li className="step-left__list-text">Sluit de RaspberryPi af</li>
							<li className="step-left__list-text">Verwijder de USB-stick van de RaspberryPi</li>
						</ul>
						<Warning text="Bij deze stap hoef je niets te doen. De software op je RaspberryPi doet dit allemaal automatisch"
						/>
					</Col>

					<Col sm={5}  className="step-right">

					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games03Page;
