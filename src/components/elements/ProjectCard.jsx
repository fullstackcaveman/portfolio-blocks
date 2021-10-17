import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Divider, Icon, Image } from 'semantic-ui-react';
import SeoSettings from '../../seo/SeoSettings';
import ReactPixel from 'react-facebook-pixel';

const pixelOptions = {
	autoConfig: true,
	debug: false,
};

ReactPixel.init('258173202988755', pixelOptions);
ReactPixel.pageView();

const ProjectCard = ({ project }) => {
	const history = useHistory();

	const projectUrl = project.projectName.replaceAll(' ', '-').toLowerCase();

	const handleClose = () => {
		history.push('/portfolio');
	};

	useEffect(() => {
		document.title = `FullStackCaveman | ${project.projectName}`;
	}, [project.projectName]);

	const pageSeo = {
		pageTitle: `| ${project.projectName}`,
		pageDescription: project.description,
		pageKeywords: [
			project.projectName,
			project.description,
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
		pageUrl: `/portfolio/${projectUrl}`,
		pageImage: project.thumbnail,
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='project-section'
		>
			<SeoSettings {...pageSeo} />
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='project-info'>
				<div className='project-image'>
					<Image
						src={project.thumbnail}
						size='large'
						alt={project.projectName}
					/>
				</div>
				<div className='project-data'>
					<h2>{project.projectName.toUpperCase()}</h2>
					<p className='align-middle'>
						<span className='bold mr5'>Client: </span>
						{project.client}
					</p>
					<p>
						<span className='bold mr5'>Description: </span>{' '}
						{project.description}
					</p>
					<p>
						<span className='bold mr5'>Technologies Used:</span>{' '}
						{project.techStack.map((tech) => {
							return `${tech} `;
						})}
					</p>
				</div>
			</div>
			<Divider inverted />
			<div className='buttons'>
				<a href={project.gitHubLinks[0]} target='_blank' rel='noreferrer'>
					<Button icon>
						GitHub Repo
						<span className='btn-icon'>
							<Icon name='external' />
						</span>
					</Button>
				</a>
				{project.deployedLink === 'none' ? (
					<></>
				) : (
					<a
						href={project.deployedLink}
						target='_blank'
						rel='noreferrer noopener'
					>
						<Button icon>
							Live Site
							<span className='btn-icon'>
								<Icon name='external' />
							</span>
						</Button>
					</a>
				)}
			</div>
		</motion.section>
	);
};

export default ProjectCard;
