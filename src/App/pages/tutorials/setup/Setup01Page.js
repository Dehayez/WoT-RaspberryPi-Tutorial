import { default as React } from 'react';

import * as Routes from '../../../routes';

import { NextRight, TutorialNavigation, Warning } from '../../../components';

import {Container, Row, Col} from 'react-bootstrap';

import { IoIosLaptop } from 'react-icons/io';

import { img_rbp } from '../../../assets/images';

import { Link } from "react-router-dom";

const Setup01Page = () => {

	return (
		<div className="setup01">
			<NextRight route={Routes.SETUP2} />
			<TutorialNavigation 
				text1="1. Benodigdheden" 
				text2="2. RetroPi Software"
				text3="3. Etcher.io"
				text4="4. RetroPi SD kaart"
				text5="5. Raspberry Pi"

				link1="/setup/1" 
				link2="/setup/2"
				link3="/setup/3"
				link4="/setup/4"
				link5="/setup/5"
			/>

			<Container className="container-step">
				<Row className="step">
					<Col lg={7} className="step-left">
						<IoIosLaptop className="icon-laptop"/>
						<h3 className="step-left__title">1. Benodigdheden</h3>
						<table>
							<tbody>
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
							</tbody>
						</table> 
					</Col>

					<Col lg={5}  className="step-right">
						<img src={ img_rbp } className="step-right__image-padje" width="80%" height="auto"/>
						<Link className="home__data-wrapper-button button--white" to={Routes.INFO}><p>Info over RPB</p></Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Setup01Page;
