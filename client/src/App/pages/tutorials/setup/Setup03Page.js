import { default as React } from 'react';

import * as Routes from '../../../routes';

import {Container, Row, Col} from 'react-bootstrap';

import { setup03 } from '../../../assets/gifs'

import { NextLeft, NextRight, TutorialNavigation, Warning } from '../../../components';

import { IoIosLaptop } from 'react-icons/io';

const Setup03Page = () => {
	return (
		<div className="setup03">
			<NextLeft route={Routes.SETUP2} />
			<NextRight route={Routes.SETUP4} />
			<TutorialNavigation 
				text1="Benodigdheden" 
				text2="RetroPi Software"
				text3="Etcher.io"
				text4="RetroPi SD kaart"
				text5="Raspberry Pi"

				link1="/setup/1" 
				link2="/setup/2"
				link3="/setup/3"
				link4="/setup/4"
				link5="/setup/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col sm={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">Download etcher.io</h3>
						<ul className="step-left__list">
							<li className="step-left__list-text">Navigeer naar deze <a href="https://www.balena.io/etcher/">link</a> </li>
							<li className="step-left__list-text">Download de versie die compatibel is met jouw laptop. Het gedownloadde bestand is een applicatie die ja kan openen op je computer. <br/>
								<b>IOS: </b> Sleep het gedownloadde bestand in de applicatie folder <br/>
								<b>Windows: </b>  Open de applicatie vanuit je download folder 
							</li>
							<li className="step-left__list-text">Open de applicatie <b>balenaEtcher</b> voor de volgende stap.</li>
						</ul>
					</Col>

					<Col sm={5}  className="step-right">
						<iframe className="gif" src={setup03} width="100%" height="100%"></iframe>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup03Page;
