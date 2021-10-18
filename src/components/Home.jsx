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
import LambdaCert from './LambdaCert';

const Home = () => {
	const [currentScore, setCurrentScore] = useState(0);
	const location = useLocation();

	const setProject = () => {
		const projectCall = [];

		// eslint-disable-next-line
		projects.map((project) => {
			if (
				'/portfolio/' +
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
						<PortfolioPic />
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
						<p>(You'll know when you've reached the limit!)</p>
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
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path='/' component={HomeBlocks} />
						<Route
							path='/about/lambda-school-certificate'
							component={LambdaCert}
						/>
						<Route path='/about' component={About} />
						<Route path='/portfolio/:id'>{setProject()}</Route>
						<Route path='/portfolio' component={Portfolio} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</AnimatePresence>
			</div>
		</main>
	);
};

export default Home;
