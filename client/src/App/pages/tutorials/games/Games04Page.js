import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft, NextRight } from '../../../components'

const Games04Page = () => {
	return (
		<div className="games04">
			<NextLeft route={Routes.GAMES3} />
			<NextRight route={Routes.GAMES5} />
			games04page
		</div>
	);
};

export default Games04Page;
