import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { projects } from '../data/projects';
import { Image } from 'semantic-ui-react';

const Portfolio = () => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/');
	};

	const handleClick = (project) => {
		const projectUrl = project.replaceAll(' ', '-').toLowerCase();

		history.push(`/projects/${projectUrl}`);
	};

	useEffect(() => {
		document.title = 'FullStackCaveman | Portfolio';
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='portfolio-section'
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
						<BsFillBriefcaseFill />
					</span>
					<span className='outer-line'></span>
				</div>

				<div className='projects-info'>
					<div className='projects'>
						{projects.map((project) => {
							return (
								<div
									key={project.id}
									className='project'
									onClick={() => handleClick(project.projectName)}
								>
									<div className='project-image'>
										<Image
											src={project.thumbnail}
											size='large'
											alt={project.projectName}
										/>
									</div>
									<span className='project-name-wrap'>
										<div className='project-name'>
											{project.projectName.toUpperCase()}
										</div>
									</span>
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
