import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft, NextRight, TutorialNavigation  } from '../../../components'

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
		</div>
	);
};

export default Games04Page;
