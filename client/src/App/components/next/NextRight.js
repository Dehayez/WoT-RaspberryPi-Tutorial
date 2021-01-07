import { default as React } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import * as Routes from '../../routes';

import './next.scss';

const NextRight = ({route}) => {

	return (
		<Link to={route} className="next-right">
			<FaAngleRight size={24} />
		</Link>
	);
};

export default NextRight;
