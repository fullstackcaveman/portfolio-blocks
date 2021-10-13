import { Switch, Route, useLocation } from 'react-router-dom';
import HomeBlocks from './elements/HomeBlocks';
import PortfolioPic from './elements/PortfolioPic';
import About from './About';

import { AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';

import { projects } from '../data/projects';
import ProjectCard from './elements/ProjectCard';
import Contact from './Contact';

const Home = () => {
	const location = useLocation();

	const setProject = () => {
		const projectCall = [];

		// eslint-disable-next-line
		projects.map((project) => {
			if (
				'/projects/' +
					project.projectName.replaceAll(' ', '-').toLowerCase() ===
				window.location.pathname
			) {
				projectCall.push(project);
			}
		});
		return <ProjectCard project={projectCall[0]} />;
	};

	return (
		<main className='main-container'>
			<div className='portfolio-pic'>
				<PortfolioPic />
			</div>
			<div
				className='content-area'
				style={{ overflowX: 'hidden', position: 'relative' }}
			>
				<AnimatePresence>
					<Switch location={location} key={location.pathname}>
						<Route exact path='/' component={HomeBlocks} />
						<Route path='/about' component={About} />
						<Route path='/portfolio' component={Portfolio} />
						<Route path='/contact' component={Contact} />
						<Route path='/projects/:id'>{setProject()}</Route>
					</Switch>
				</AnimatePresence>
			</div>
		</main>
	);
};

export default Home;
