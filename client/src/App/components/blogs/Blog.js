import { default as React } from 'react';

import * as Routes from '../../routes';

import './blog.scss';

const Blog = ({link, img, title}) => {

	return (
		<div className="blog">
			<img alt="img_of_blog" src={img}></img>
			<div className="blog__wrapper">
				<h1>{title}</h1>
				<a href={link}><p><strong>Druk hier voor de Tutorial</strong></p></a>
			</div>
		</div>
	);
};

export default Blog;
