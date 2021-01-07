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
					Met deze voorbeelden kunnen we je al eens ontdekken wat je kan ontwikkelen.
				</p>
			</div>
			<div className="info__blogs">
				<Blog img={Images.img01} link='https://pimylifeup.com/raspberry-pi-mosquitto-mqtt-server/' title='Installing the Mosquitto MQTT Server' />
				<Blog img={Images.img02} link='https://pimylifeup.com/raspberry-pi-django/' title='Installing Django on your Raspberry Pi' />
				<Blog img={Images.img03} link='https://pimylifeup.com/raspberry-pi-nfs-client/' title='Connecting to an NFS Share on the Raspberry Pi' />
				<Blog img={Images.img04} link='https://pimylifeup.com/raspberry-pi-airprint/' title='Setting up an AirPrint Server on your Raspberry Pi' />
				<Blog img={Images.img05} link='https://pimylifeup.com/raspberry-pi-quake-3/' title='Running Quake 3 on the Raspberry Pi' />
			</div>
		</div>
	);
};

export default InfoPage;
