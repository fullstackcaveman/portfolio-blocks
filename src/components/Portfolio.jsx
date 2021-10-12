import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaIdCard } from 'react-icons/fa';
import {
	portfolioPageVariants,
	portfolioPageTransitions,
} from '../animation/MotionSettings';
import { projects } from '../data/projects';
import ProjectCard from './elements/ProjectCard';

import { Image } from 'semantic-ui-react';

const Portfolio = () => {
	const history = useHistory();

	console.log(projects);

	const handleClose = () => {
		history.push('/');
	};

	useEffect(() => {
		document.title = 'The FullStackCaveman Portfolio';
	}, []);

	return (
		<motion.section
			className='portfolio-section'
			exit='out'
			animate='in'
			initial='out'
			variants={portfolioPageVariants}
			transition={portfolioPageTransitions}
		>
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>MY</span> <span className='accent'>PORTFOLIO</span>
				</h2>
			</div>
			<div className='info-section'>
				<div className='divider'>
					<span className='outer-line'></span>
					<span className='v-card'>
						<FaIdCard />
					</span>
					<span className='outer-line'></span>
				</div>

				<div className='projects-info'>
					<div className='projects'>
						{projects.map((project) => {
							return (
								<div key={project.id} className='project-block'>
									<Image src={project.thumbnail} size='large' fluid />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Portfolio;
