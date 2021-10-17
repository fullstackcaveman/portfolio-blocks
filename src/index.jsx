import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';
import GA4React from 'ga-4-react';
import TagManager from 'react-gtm-module';

const ga4react = new GA4React('G-PS3ZG01431');

(async () => {
	await ga4react.initialize();
	await TagManager.initialize({ gtmId: 'GTM-T3M6LDP' });

	ReactDOM.render(
		<Router>
			<App />
		</Router>,
		document.getElementById('root')
	);
})();
