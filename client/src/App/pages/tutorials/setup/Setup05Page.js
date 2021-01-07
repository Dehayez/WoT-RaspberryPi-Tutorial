import { default as React } from 'react';

import * as Routes from '../../../routes';

import './setup.scss';

import { NextLeft } from '../../../components'

const Setup05Page = () => {
	return (
		<div className="setup05">
			<NextLeft route={Routes.SETUP4} />
			Setup05Page
		</div>
	);
};

export default Setup05Page;
