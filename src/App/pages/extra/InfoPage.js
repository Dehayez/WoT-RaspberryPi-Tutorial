import { default as React } from 'react';

import * as Images from '../../assets/images'

import './extra.scss';

import { Blog } from '../../components'

const InfoPage = () => {
	return (
		<div className="info">
			<div className="info__title">
				<h1>Info</h1>
				<p className="home__data-text">
					We willen jullie ook tonen wat er nog mogelijk is met jullie RaspberryPi.
					De Mogelijkheden zijn eindeloos en je kan er zeer creatief mee omgaan.
					Met deze voorbeelden kan je ontdekken wat je allemaal kan ontwikkelen.
				</p>
			</div>
			<div className="info__raspberrypi">
				<h2>RaspberryPi</h2>
				<p className="home__data-text">
					De <strong>Raspberry Pi (RPI)</strong> is een kleine computer waarvan de onderdelen allemaal op 1 printplaat zijn ondergebracht.
					Het wordt ook wel een micro PC genoemd. Je kunt er allerlei leuke dingen mee doen. 
					Je kunt het als een gewone PC gebruiken, maar je kunt er ook thuis lichten mee aansturen, je verwarming aan of uit zetten of een mediaspeler van maken. 
					Deze computer is niet alleen handig qua formaat, maar is ook zeer betaalbaar. 
					Het energieverbruik van de RPi is daarnaast erg laag, veel lager dan van een gewone PC.
				</p>
				<img src={ Images.img_rbp } className="step-right__image-padje" width="400px" height="auto"/>
				<p className="home__data-text">
					<strong>Wat zit er op een Raspberry Pi computer?</strong><br></br>
					- Micro USB poort voor stroomtoevoer <br></br>
					- USB host poorten 4x (bijvoorbeeld voor toetsenbord, muis en wifi-adapter)<br></br>
					- Ethernet aansluitingvoor netwerkverbinding (internet)<br></br>
					- HDMI uitgangvoor beeld en geluid<br></br>
					- 3,5 inch Jack uitgang voor geluid (bijvoorbeeld hoofdtelefoon)<br></br>
					- micro SD-kaart aansluiting voor het besturingssysteem<br></br>
					- interne video uitgang voor monitor of touchscreen display<br></br>
					- GPIO (General Purpose In Out) pinnen voor communicatie met andere onderdelen. Je kunt deze pinnen bijvoorbeeld verbinden met LED lampjes of met een sensor om licht te meten of bijvoorbeeld een sensor om temperatuur te meten.<br></br>
					- WiFi<br></br>
					- Bluetooth<br></br>
				</p>
				<p>
					Als je nog steeds niet overtuigd bent van hoe cool een Raspberry Pi is, dan kan je hieronder nog enkele voorbeelden zien van wat je ermee kan doen!
				</p>
				<a href="https://www.kiwi-electronics.nl/raspberry-pi/board-and-kits/raspberry-pi-4-model-b-8gb" className="home__data-wrapper-button" target="_blank">Raspberry Pi bestellen</a>
			</div>

			<h3>Leuke toepassingen met een Raspberry Pi</h3>
			<div className="info__blogs">
				<Blog img={Images.img06} link='https://pimylifeup.com/minecraft-raspberry-pi/' title='Minecraft on the Raspberry Pi' />
				<Blog img={Images.img05} link='https://pimylifeup.com/raspberry-pi-quake-3/' title='Running Quake 3 on the Raspberry Pi' />
				<Blog img={Images.img07} link='https://pimylifeup.com/raspberry-pi-netflix/' title='How to Run Netflix on the Raspberry Pi' />
				<Blog img={Images.img08} link='https://pimylifeup.com/raspberry-pi-led-strip-apa102/' title='Raspberry Pi LED Strip using the APA102' />
				<Blog img={Images.img09} link='https://pimylifeup.com/raspberry-pi-spotify/' title='How to Setup Spotify Connect on the Raspberry Pi' />
				<Blog img={Images.img04} link='https://pimylifeup.com/raspberry-pi-terraria-server/' title='How to set up a Raspberry Pi Terraria Server' />
				<Blog img={Images.img03} link='https://pimylifeup.com/raspberry-pi-google-assistant/' title='Build your own Raspberry Pi Google Assistant' />
				<Blog img={Images.img02} link='https://pimylifeup.com/raspberry-pi-tor-access-point/' title='How to setup a Raspberry Pi TOR Access Point' />
				<Blog img={Images.img01} link='https://pimylifeup.com/raspberry-pi-motion-sensor/' title='Raspberry Pi Motion Sensor using a PIR Sensor' />
			</div>
		</div>
	);
};

export default InfoPage;
