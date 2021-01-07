import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft, NextRight } from '../../../components'

const Setup04Page = () => {
	return (
		<div className="setup04">
			<NextLeft route={Routes.SETUP3} />
			<NextRight route={Routes.SETUP5} />
			Setup04Page
		</div>
	);
};

export default Setup04Page;
