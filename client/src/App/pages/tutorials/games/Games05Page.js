import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextLeft, TutorialNavigation } from '../../../components';

import { img_restart } from '../../../assets/images';

import {Container, Row, Col} from 'react-bootstrap';

import { FaRaspberryPi } from 'react-icons/fa';

const Games05Page = () => {
	return (
		<div className="games05">
			<NextLeft route={Routes.GAMES4} />
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
					<Col lg={7} className="step-left">
						<FaRaspberryPi className="icon-rbp"/>
						<h3 className="step-left__title">Almost playtime, hang on!</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Start de RaspberryPi op</li>
							<li className="step-left__list-text">Steek de USB-stick in de poort van de RaspberryPi</li>
							<li className="step-left__list-text">Druk op start op je controller en volg Main menu {'>'} Quit {'>'} Restart Emulationstation</li>
							<li className="step-left__list-text">Dit zal enkele minuten duren, maar wanneer je RaspberryPi herstart is, zal je zien dat er verschillende emulators te voorschijn komen</li>
							<p className="step-left__list-text">Navigeer naar de emulator van je favorite game, en je bent klaar om te spelen!</p>
						</ul>
					</Col>

					<Col lg={5}  className="step-right">
						<img src={img_restart} width="80%" height="auto"></img>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games05Page;
