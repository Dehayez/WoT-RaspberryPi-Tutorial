import { default as React } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import './next.scss';

const NextLeft = ({route}) => {

	return (
		<Link to={route} className="next-left">
			<FaAngleLeft size={24} />
		</Link>
	);
};

export default NextLeft;
