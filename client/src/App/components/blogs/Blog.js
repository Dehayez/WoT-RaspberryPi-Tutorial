import { default as React } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import * as Routes from '../../routes';

import './blog.scss';

const Blog = ({link, img, title, context}) => {

	return (
		<Link to={link} className="blog">
			<img alt="img_of_blog" src={img}></img>
			<div className="blog__wrapper">
				<h1>{title}</h1>
				<p>{context}</p>
			</div>
		</Link>
	);
};

export default Blog;
