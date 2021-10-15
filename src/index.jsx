import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';
import GA4React from 'ga-4-react';

const ga4react = new GA4React('G-PS3ZG01431');

(async () => {
	await ga4react.initialize();

	ReactDOM.render(
		<Router>
			<App />
		</Router>,
		document.getElementById('root')
	);
})();
