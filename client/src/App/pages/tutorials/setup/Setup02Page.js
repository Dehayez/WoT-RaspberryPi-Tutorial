import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft, NextRight } from '../../../components'

const Setup02Page = () => {
	return (
		<div className="setup02">
			<NextLeft route={Routes.SETUP1} />
			<NextRight route={Routes.SETUP3} />
			Setup02Page
		</div>
	);
};

export default Setup02Page;
