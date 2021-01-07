import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextRight } from '../../../components'

const Games01Page = () => {
	return (
		<div className="games01">
			<NextRight route={Routes.GAMES2} />
			games01page
		</div>
	);
};

export default Games01Page;
