import { default as React, useEffect, useState } from 'react';


import './extra.scss';

const ContactPage = () => {

	const [ inputValue, setInputValue ] = useState('');
 
	return (
		<div className="contact">
			<div className="contact__title">
			<h1>Contact us</h1>
				<p>
					Wanneer je problemen ondervindt bij het opzetten van je RaspberryPi of het RetroPi systeem,
					kan je ons contacteren op dit mailadress:
				</p>
				
			<h2 className="text-flicker-in-glow ">jeroverv@student.arteveldehs.be</h2>
			</div>

		</div>
	);
};

export default ContactPage;
