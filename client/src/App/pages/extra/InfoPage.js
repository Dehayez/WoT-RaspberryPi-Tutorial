import { default as React } from 'react';

import * as Images from '../../assets/images'

import './extra.scss';

import { Blog } from '../../components'

const InfoPage = () => {
	return (
		<div className="info">
			<div className="info__title">
				<h1>Info</h1>
				<p>
					We willen jullie ook tonen wat er nog mogelijk is met jullie RaspberryPi.
					De Mogelijkheden zijn eindeloos en je kan er zeer creatief mee omgaan.
					Met deze voorbeelden kan je ontdekken wat je allemaal kan ontwikkelen.
				</p>
			</div>
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
