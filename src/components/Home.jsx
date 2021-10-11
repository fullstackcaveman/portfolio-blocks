import { Switch, Route } from 'react-router-dom';
import HomeBlocks from './elements/HomeBlocks';
import PortfolioPic from './elements/PortfolioPic';

const Home = () => {
	return (
		<main className='main-container'>
			<div className='portfolio-pic'>
				<PortfolioPic />
			</div>
			<div className='content-area'>
				<Switch>
					<Route exact path='/' component={HomeBlocks} />
				</Switch>
			</div>
		</main>
	);
};

export default Home;
