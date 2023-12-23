import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Divider, Icon, Image } from 'semantic-ui-react';
import SeoSettings from '../../seo/SeoSettings';
// import ReactPixel from 'react-facebook-pixel';

// ReactPixel.pageView();

const ProjectCard = ({ project }) => {
	const navigate = useNavigate();

	const projectUrl = project.projectName.replaceAll(' ', '-').toLowerCase();

	const handleClose = () => {
		navigate('/portfolio');
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
			<div className='fancy-title'>
				<h1>{project.projectName.toUpperCase()}</h1>
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

					<div className='buttons'>
						{project.gitHubLinks.length < 1 ? (
							<></>
						) : (
							<a href={project.gitHubLinks[0]} target='_blank' rel='noreferrer'>
								<Button icon>
									GitHub Repo
									<span className='btn-icon'>
										<Icon name='external' />
									</span>
								</Button>
							</a>
						)}
						{project.deployedLink === null ? (
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
				</div>
			</div>
			<Divider inverted />
			{project.projectImages.length < 1 ? (
				<></>
			) : (
				<div className='project-images'>
					<h3>SCREENSHOTS</h3>
					<div className='screenshots'>
						{project.projectImages.map((image) => {
							return (
								<Image
									key={project.projectImages.indexOf(image)}
									size='large'
									src={image}
									alt={project.projectName}
								/>
							);
						})}
					</div>
				</div>
			)}
		</motion.section>
	);
};

export default ProjectCard;
