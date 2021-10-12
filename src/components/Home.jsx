import { Switch, Route, useLocation } from 'react-router-dom';
import HomeBlocks from './elements/HomeBlocks';
import PortfolioPic from './elements/PortfolioPic';
import About from './About';

import { AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';

const Home = () => {
	const location = useLocation();
	return (
		<main className='main-container'>
			<div className='portfolio-pic'>
				<PortfolioPic />
			</div>
			<div className='content-area' style={{ overflowX: 'hidden' }}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path='/' component={HomeBlocks} />
						<Route path='/about' component={About} />
						<Route path='/portfolio' component={Portfolio} />
					</Switch>
				</AnimatePresence>
			</div>
		</main>
	);
};

export default Home;
