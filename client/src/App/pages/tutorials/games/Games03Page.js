import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft, NextRight } from '../../../components'

const Games03Page = () => {
	return (
		<div className="games03">
			<NextLeft route={Routes.GAMES2} />
			<NextRight route={Routes.GAMES4} />
			games03page
		</div>
	);
};

export default Games03Page;
