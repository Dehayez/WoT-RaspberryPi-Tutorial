import { default as React, useEffect, useState } from 'react';
import { COLORS } from '../../assets/data'

import './extra.scss';

const ContactPage = () => {

	const array_lenght = COLORS.length;
	const [ color, setColor ] = useState(COLORS[Math.round( Math.random() * array_lenght )]);

	useEffect(() => {
		const interval = setInterval(() => {
			const random_int = Math.round( Math.random() * array_lenght );
			setColor(COLORS[random_int]);
		}, 1000);
		return () => clearInterval(interval);
	}, [])

	const mystyle = {
		color: color,
		fontSize: Math.round((Math.random() + 0.8)*24),
	  };

	return (
		<div className="contact">
			<div className="contact__title">
			<h1>Contact us</h1>
				<p>
					Wanneer je problemen ondervindt bij het opzetten van je RaspberryPi of het RetroPi systeem,
					kan je ons contacteren op dit mailadress
				</p>
			<h2 style={mystyle} id="email" >jeroverv@student.arteveldehs.be</h2>
			</div>

		</div>
	);
};

export default ContactPage;
