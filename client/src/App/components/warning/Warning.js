import { default as React } from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';

import './warning.scss';

const Warning = ({text}) => {


	return (
		<div className="warning">
			<RiErrorWarningLine/>
			<p>{text}</p>
		</div>
	);
};

export default Warning;
