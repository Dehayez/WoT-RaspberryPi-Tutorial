import { default as React } from 'react';

import * as Routes from '../../routes';

import './extra.scss';

import {  } from '../../components'

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
			<div className="info__blogs"></div>
		</div>
	);
};

export default InfoPage;
