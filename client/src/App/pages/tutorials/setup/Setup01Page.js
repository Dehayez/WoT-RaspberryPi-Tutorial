import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextRight, TutorialNavigation, Warning } from '../../../components';

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

const Setup01Page = () => {
	return (
		<div className="setup01">
			<NextRight route={Routes.SETUP2} />
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
						<h3 className="step-left__title">Benodigdheden</h3>
						<table>
							<tr>
								<td className="step-left__list-text"><b>RaspberryPi</b></td>
								<td className="step-left__list-text">Versie 3 of 4</td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>SD Kaart</b></td>
								<td className="step-left__list-text">min 8GB</td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>USB Stick</b></td>
								<td className="step-left__list-text">min 2GB</td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>Gamepad</b></td>
								<td className="step-left__list-text">Dualshock 3/4/5 of Xbox controller 360/One of Wii controller</td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>Kabels</b></td>
								<td className="step-left__list-text">Micro-usb & HDMI</td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>Monitor</b></td>
								<td className="step-left__list-text"></td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>Toetsenbord en muis</b></td>
								<td className="step-left__list-text"></td>
							</tr>
							<tr>
								<td className="step-left__list-text"><b>Laptop</b></td>
								<td className="step-left__list-text"></td>
							</tr>
						</table> 
						<Warning text="Je hebt alle componenten nodig om deze tutorial te voltooien. Controleer of de SD kaart en USB stick leeg zijn"/>
					</Col>

					<Col sm={5}  className="step-right">

					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup01Page;
