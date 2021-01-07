import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft, NextRight } from '../../../components'

const Setup03Page = () => {
	return (
		<div className="setup03">
			<NextLeft route={Routes.SETUP2} />
			<NextRight route={Routes.SETUP4} />
			Setup03Page
		</div>
	);
};

export default Setup03Page;
