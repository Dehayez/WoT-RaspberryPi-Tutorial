import { default as React } from 'react';

import * as Routes from '../../../routes';

import './games.scss';

import { NextLeft } from '../../../components'

const Games05Page = () => {
	return (
		<div className="games05">
			<NextLeft route={Routes.GAMES4} />
			games05page
		</div>
	);
};

export default Games05Page;
