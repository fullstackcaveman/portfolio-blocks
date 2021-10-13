import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Divider, Icon, Image } from 'semantic-ui-react';
import {
	projectPageVariants,
	projectPageTransitions,
} from '../../animation/motionSettings';

const ProjectCard = ({ project }) => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/portfolio');
	};

	useEffect(() => {
		document.title = `FullStackCaveman | ${project.projectName}`;
	}, []);

	return (
		<motion.section
			className='project-section'
			exit='out'
			animate='in'
			initial='out'
			variants={projectPageVariants}
			transition={projectPageTransitions}
		>
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='project-info'>
				<div className='project-image'>
					<Image src={project.thumbnail} size='large' />
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
					<a href={project.deployedLink} target='_blank' rel='noreferrer'>
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
