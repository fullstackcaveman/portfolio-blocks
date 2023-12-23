import { Route, Routes, useLocation } from 'react-router-dom';
import HomeBlocks from './elements/HomeBlocks';
import PortfolioPic from './elements/PortfolioPic';
import About from './About';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './Portfolio';
import { projects } from '../data/projects';
import ProjectCard from './elements/ProjectCard';
import Contact from './Contact';
import LearningHistory from './LearningHistory';
import { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import WebsiteQuestionnaire from './WebsiteQuestionnaire';

const Home = () => {
	const [currentScore, setCurrentScore] = useState(0);
	const location = useLocation();

	const renderProjectCard = () => {
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
				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route path='/about' element={<About />} />
						<Route path='/education-history' element={<LearningHistory />} />
						<Route
							path='/portfolio/:projectName'
							element={renderProjectCard()}
						/>
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='/contact' element={<Contact />} />
						<Route
							path='/website-questionnaire'
							element={<WebsiteQuestionnaire />}
						/>
						<Route path='/' element={<HomeBlocks />} />
					</Routes>
				</AnimatePresence>
			</div>
		</main>
	);
};

export default Home;
