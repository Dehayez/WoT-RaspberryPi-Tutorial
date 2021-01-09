import { default as React } from 'react';

import * as Routes from '../../../routes';

import arcade from '../../../assets/illustrations/arcade.svg';

import {Container, Row, Col} from 'react-bootstrap';

import { NextRight, NextLeft, TutorialNavigation } from '../../../components';

const Games01Page = () => {
	return (
		<div className="games01">
			<NextLeft route={Routes.SETUP5} />
			<NextRight route={Routes.GAMES2} />
			<TutorialNavigation 
				text1="1. Intro" 
				text2="2. Voorbereiding"
				text3="3. Cofigureren"
				text4="4. ROMS Downloaden"
				text5="5. Playtime"

				link1="/games/1" 
				link2="/games/2"
				link3="/games/3"
				link4="/games/4"
				link5="/games/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col lg={7} className="step-left">
						<h3 className="step-left__title">1. Games toevoegen aan RaspberryPi</h3>
						<p className="step-left__list-text">In dit deel van de tutorial wordt er uitgelegd hoe je verschillende games aka ‘ROMS’ downloadt en in de juiste map zet, zodat je zo ook kan spelen!</p>
					</Col>

					<Col lg={5}  className="step-right">
						<img className="step-right__image" src={arcade} alt="arcade"></img>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games01Page;
