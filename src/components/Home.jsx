import { Switch, Route, useLocation } from 'react-router-dom';
import HomeBlocks from './elements/HomeBlocks';
import PortfolioPic from './elements/PortfolioPic';
import About from './About';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';
import { projects } from '../data/projects';
import ProjectCard from './elements/ProjectCard';
import Contact from './Contact';
import { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';

const Home = () => {
	const [currentScore, setCurrentScore] = useState(0);
	const [resetIcons, setResetIcons] = useState(false);
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

	const handleAddIcons = () => {
		setCurrentScore(currentScore + 4);
	};

	const handleReset = () => {
		window.location.reload(false);
	};

	return (
		<main className='main-container'>
			<Popup
				trigger={
					<div className='portfolio-pic' onClick={handleAddIcons}>
						<PortfolioPic reset={resetIcons} setReset={setResetIcons} />
					</div>
				}
				position='right center'
				on={['hover']}
				inverted
				hoverable
				pinned
				header={
					'How many additional icons can you fit in the box before they go into infinite motion?'
				}
				content={
					<>
						<br />
						<p>Each click inserts 4 icons</p>
						<br />
						<p className='score'>{currentScore}</p>
						<br />
						<Button className='icon-reset' fluid onClick={handleReset}>
							RESET ICONS
						</Button>
					</>
				}
				className='particle-popup'
			/>

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
