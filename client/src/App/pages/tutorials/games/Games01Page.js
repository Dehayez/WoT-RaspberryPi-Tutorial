import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextRight, TutorialNavigation } from '../../../components'

const Games01Page = () => {
	return (
		<div className="games01">
			<NextRight route={Routes.GAMES2} />
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
		</div>
	);
};

export default Games01Page;
