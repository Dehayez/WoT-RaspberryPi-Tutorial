import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import { games04 } from '../../../assets/gifs'

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Games04Page = () => {
	return (
		<div className="games04">
			<NextLeft route={Routes.GAMES3} />
			<NextRight route={Routes.GAMES5} />
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
						<h3 className="step-left__title">ROMS (games) downloaden</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Steek de USB-stick in de poort van je computer</li>
							<li className="step-left__list-text">Controleer eerst of er nieuwe bestanden in de folder ‘retropie’ zijn toegevoegd</li>
							<li className="step-left__list-text">Zoek nu op het internet naar de retro games die jij wil spelen. Er bestaan verschillende bibliotheken hiervoor zoals  
								<a href="https://www.romsgames.net/roms/"> RomsGames</a>, 
								<a href="https://www.emulatorgames.net/roms/"> EmulatorGames</a>, 
								<a href="https://romsmania.cc/roms"> RomsMania</a>
							</li>
							<li className="step-left__list-text">Zet de gedownloadde ROMS in de juiste folder op de USB-stick retropie {'>'} roms {'>'} CONSOLE_FOLDER {'>'} GEDOWNLOADE_ROM</li>
						</ul>
					</Col>

					<Col sm={5}  className="step-right">
						<iframe className="gif" src={games04} width="100%" height="100%"></iframe>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Games04Page;
