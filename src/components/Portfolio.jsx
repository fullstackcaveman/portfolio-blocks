import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { projects } from '../data/projects';
import { Image } from 'semantic-ui-react';
import SeoSettings from '../seo/SeoSettings';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/');
	};

	const handleUrl = (project) => {
		const projectUrl = project.replaceAll(' ', '-').toLowerCase();
		return `/portfolio/${projectUrl}`;
	};

	useEffect(() => {
		document.title = 'FullStackCaveman | Portfolio';
	}, []);

	const pageSeo = {
		pageTitle: '| Portfolio',
		pageDescription: 'FullStackCaveman portfolio of work',
		pageKeywords: [
			'portfolio',
			'fullstackcaveman',
			'great falls, mt',
			'web developer',
			'software developer',
			'front end developer',
			'back end developer',
			'full stack developer',
			'great falls, mt',
			'montana website developer',
			'website developer',
			'freelance web development',
		],
		pageUrl: '/portfolio',
		pageImage:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634313989/Portfolio%20Website/blocks-portfolio-portfolio-thumb_r2e0wx.png',
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='portfolio-section'
		>
			<SeoSettings {...pageSeo} />
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
								<Link
									key={project.id}
									className='project'
									to={handleUrl(project.projectName)}
								>
									<div className='project-image'>
										<Image
											src={project.thumbnail}
											size='medium'
											alt={project.projectName}
										/>
									</div>
									<span className='project-name-wrap'>
										<div className='project-name'>
											{project.projectName.toUpperCase()}
										</div>
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Portfolio;
