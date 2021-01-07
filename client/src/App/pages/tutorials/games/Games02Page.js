import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft, NextRight } from '../../../components'

const Games02Page = () => {
	return (
		<div className="games02">
			<NextLeft route={Routes.GAMES1} />
			<NextRight route={Routes.GAMES3} />
			games02page
		</div>
	);
};

export default Games02Page;
