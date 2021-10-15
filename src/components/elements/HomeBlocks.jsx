import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Block1 from './Block1';
import { useEffect } from 'react';
import SeoSettings from '../../seo/SeoSettings';

const HomeBlocks = () => {
	useEffect(() => {
		document.title = 'FullStackCaveman';
	}, []);

	// const pageSeo = {
	// 	pageTitle: '',
	// 	pageDescription: 'FullStackCaveman Portfolio Website',
	// 	pageKeywords: [
	// 		'fullstackcaveman',
	// 		'great falls, mt',
	// 		'web developer',
	// 		'software developer',
	// 		'front end developer',
	// 		'back end developer',
	// 		'full stack developer',
	// 		'great falls, mt',
	// 		'montana website developer',
	// 		'website developer',
	// 		'freelance web development',
	// 	],
	// 	pageUrl: '/',
	// 	pageImage:
	// 		'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634068837/Portfolio%20Website/blocks_portfolio_thumb_ob9jd7.png',
	// };

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='blocks'
		>
			{/* <SeoSettings {...pageSeo} /> */}
			<div className='top-row'>
				<div className='block-1'>
					<Block1 />
				</div>
				<Link to='/about' className='block-2'>
					<h2>
						<span className='white'>ABOUT</span>{' '}
						<span className='accent'>ME</span>
					</h2>
				</Link>
			</div>
			<div className='bottom-row'>
				<Link to='/portfolio' className='block-3'>
					<h2>
						<span className='white'>MY</span>{' '}
						<span className='accent'>PORTFOLIO</span>
					</h2>
				</Link>
				<Link to='/contact' className='block-4'>
					<h2>
						<span className='white'>GET</span>{' '}
						<span className='accent'>IN TOUCH</span>
					</h2>
				</Link>
			</div>
		</motion.div>
	);
};

export default HomeBlocks;
