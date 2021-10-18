import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Icon, Image } from 'semantic-ui-react';
import SeoSettings from '../seo/SeoSettings';
import ReactPixel from 'react-facebook-pixel';

const pixelOptions = {
	autoConfig: true,
	debug: false,
};

ReactPixel.init('258173202988755', pixelOptions);
ReactPixel.pageView();

const LambdaCert = () => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/about');
	};

	useEffect(() => {
		document.title = 'FullStackCaveman | Lambda School Certificate';
	}, []);

	const pageSeo = {
		pageTitle: '| Lambda School Certificate',
		pageDescription:
			'My Certificate of completion from Lambda School Full Stack Web Development Curriculum',
		pageKeywords: [
			'lambda school certificate',
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
		pageUrl: '/about/lambda-school-certificate',
		pageImage:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634582849/Portfolio%20Website/blocks-portfolio-certificate-thumb_ef21c7.png',
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='about-section'
		>
			<SeoSettings {...pageSeo} />
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>LAMBDA SCHOOL</span> <span className='accent'>CERTIFICATE</span>
				</h2>
			</div>
			<div className='info-section'>
				<div className='divider'>
					<span className='outer-line'></span>
					<span className='v-card'>
						<Icon name='graduation cap' size='small' />
					</span>
					<span className='outer-line'></span>
				</div>

				<div className='personal-info'>
					<h6>LAMBDA SCHOOL FULL STACK WEB DEVELOPER</h6>
					<p className='description'>
						Intensive Full Stack Web Development program with a focus on HTML,
						CSS, JavaScript, React, Node, Express, Python and SQL.
					</p>
					<div className='certificate-image'>
						<a
							href='https://res.cloudinary.com/fullstackcaveman/image/upload/v1634578447/Lambda%20School/lambda-cert_xwfsyo.png'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<Image
								src='https://res.cloudinary.com/fullstackcaveman/image/upload/v1634578447/Lambda%20School/lambda-cert_xwfsyo.png'
								size='huge'
							/>
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default LambdaCert;
