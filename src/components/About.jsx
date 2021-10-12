import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaIdCard } from 'react-icons/fa';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { ImFilePdf } from 'react-icons/im';
import { FaRegEdit } from 'react-icons/fa';
import { Button } from 'semantic-ui-react';
import {
	aboutPageTransitions,
	aboutPageVariants,
} from '../animation/MotionSettings';

const About = () => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/');
	};

	useEffect(() => {
		document.title = 'About The FullStackCaveman';
	}, []);

	return (
		<motion.section
			className='about-section'
			exit='out'
			animate='in'
			initial='out'
			variants={aboutPageVariants}
			transition={aboutPageTransitions}
		>
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>ABOUT</span> <span className='accent'>ME</span>
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

				<div className='personal-info'>
					<h6>
						<span className='person-icon'>
							<BsPersonBoundingBox />
						</span>
						PERSONAL INFO
					</h6>
					<p className='description'>
						I'm a Web & Software Developer based in Great Falls, MT. I have a
						serious passion for UI effects, animations and creating intuitive
						websites and software. I am comfortable working anywhere in the
						stack whether it be front-end or back-end or moving between the two.
					</p>

					<div className='split-section'>
						<ul className='contact'>
							<li>
								<span className='bold'>First Name: </span> Chris
							</li>
							<li>
								<span className='bold'>Last Name: </span> Burton
							</li>
							<li>
								<span className='bold'>Phone: </span>
								<a href='tel:+14067811111'>406.781.1111</a>
							</li>
							<li>
								<span className='bold'>Location: </span> Great Falls, MT
							</li>
							<li>
								<span className='bold'>Email: </span>{' '}
								<a
									href='mailto:chris@fullstackcaveman.com'
									target='_blank'
									rel='noreferrer'
								>
									chris@fullstackcaveman.com
								</a>
							</li>
							<li>
								<span className='bold'>Linkedin: </span>
								<a
									href='https://www.linkedin.com/in/fullstackcaveman/'
									target='_blank'
									rel='noreferrer'
								>
									FullStackCaveman
								</a>
							</li>
							<li>
								<span className='bold'>GitHub: </span>
								<a
									href='https://github.com/fullstackcaveman'
									target='_blank'
									rel='noreferrer'
								>
									FullStackCaveman
								</a>
							</li>
						</ul>
						<div className='buttons'>
							<a
								href='https://drive.google.com/file/d/16KsgJFupGd1oMz2lpqV_F0UZ-gdmrAwp/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button size='large' className='resume-btn'>
									<span className='btn-text'>DOWNLOAD RESUME </span>
									<span className='btn-icon'>
										{' '}
										<ImFilePdf />
									</span>
								</Button>
							</a>
							<a
								href='https://dev.to/fullstackcaveman'
								target='_blank'
								rel='noreferrer'
							>
								<Button size='large' className='blog-btn'>
									<span className='btn-text'>MY BLOG </span>
									<span className='btn-icon'>
										{' '}
										<FaRegEdit />
									</span>
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
