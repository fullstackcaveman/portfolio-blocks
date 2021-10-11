import { Link } from 'react-router-dom';
import Block1 from './Block1';

const HomeBlocks = () => {
	return (
		<div className='blocks'>
			<div className='top-row'>
				<div className='block-1'>
					<Block1 />
				</div>
				<Link to='/about' className='block-2'>
					<h2>
						<span className='white' data-hover='ABOUT'>
							ABOUT
						</span>{' '}
						<span className='accent' data-hover='ME'>
							ME
						</span>
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
		</div>
	);
};

export default HomeBlocks;
