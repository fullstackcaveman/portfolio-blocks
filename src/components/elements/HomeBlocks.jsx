import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Block1 from './Block1';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const pixelOptions = {
	autoConfig: true,
	debug: false,
};

ReactPixel.init('258173202988755', pixelOptions);
ReactPixel.pageView();

const HomeBlocks = () => {
	useEffect(() => {
		document.title = 'FullStackCaveman';
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='blocks'
		>
			<div className='top-row'>
				<div className='block-1'>
					<Block1 />
				</div>
				<Link to='/about' className='block-2'>
					<h2>
						<span className='white'>LEARN</span>{' '}
						<span className='accent'>ABOUT ME</span>
					</h2>
				</Link>
			</div>
			<div className='bottom-row'>
				<Link to='/portfolio' className='block-3'>
					<h2>
						<span className='white'>VIEW</span>{' '}
						<span className='accent'>MY WORK</span>
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
