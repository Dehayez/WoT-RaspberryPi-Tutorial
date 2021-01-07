import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft, NextRight, TutorialNavigation } from '../../../components'

const Setup02Page = () => {
	return (
		<div className="setup02">
			<NextLeft route={Routes.SETUP1} />
			<NextRight route={Routes.SETUP3} />
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

			
		</div>
	);
};

export default Setup02Page;
