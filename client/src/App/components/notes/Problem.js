import { default as React } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import * as Routes from '../../routes';

import './notes.scss';

const Problem = () => {

	const showOpen = () => {
		console.log('open now')
		document.getElementById('closed').style = "display: none;"
		document.getElementById('open').style = "display: block;"
	}
	const showClosed = () => {
		console.log('close now')
		document.getElementById('closed').style = "display: flex;"
		document.getElementById('open').style = "display: none;"
	}

	return (
		<div className="problem">
			<div id="closed" className="problem__closed" onClick={showOpen}>
				<AiOutlineInfoCircle size={24} />
				<p>Heb je problemen?</p>
				<AiOutlineInfoCircle size={24} opacity={0} />
			</div>
			<div id="open" className="problem__open" onClick={showClosed}>
				wip
			</div>
		</div>
	);
};

export default Problem;
