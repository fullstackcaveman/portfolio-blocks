import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Button, Icon, Image, Popup } from 'semantic-ui-react';
import SeoSettings from '../seo/SeoSettings';
import ReactPixel from 'react-facebook-pixel';
import { certificates } from '../data/certificates';
import { badges } from '../data/badges';

ReactPixel.pageView();

const LearningHistory = () => {
	const history = useHistory();

	const handleClose = () => {
		history.push('/about');
	};

	useEffect(() => {
		document.title = 'FullStackCaveman | Education History';
	}, []);

	const pageSeo = {
		pageTitle: '| Education History',
		pageDescription: 'FullStackCaveman Certifications And Badges',
		pageKeywords: [
			'certifications',
			'badges',
			'education history',
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
		pageUrl: '/education-history',
		pageImage:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634582849/Portfolio%20Website/blocks-portfolio-certificate-thumb_ef21c7.png',
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='learning-section'
		>
			<SeoSettings {...pageSeo} />
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>EDUCATION</span> <span className='accent'>HISTORY</span>
				</h2>
			</div>
			<div className='info-section'>
				<div className='divider'>
					<span className='outer-line'></span>
					<span className='v-card'>
						<Icon name='certificate' size='small' />
					</span>
					<span className='outer-line'></span>
				</div>

				<div className='learning-info'>
					<div className='learning-items'>
						<div className='certificates'>
							<h2>CERTIFICATES</h2>
							<div className='certificates-container'>
								{certificates.map((certificate) => {
									return (
										<a
											key={certificate.id}
											className='certificate'
											href={certificate.certImage}
											target='_blank'
											rel='noopener noreferrer nofollow'
										>
											<div className='certificate-image'>
												<Image
													src={certificate.certImage}
													size='large'
													alt={`${certificate.certName} Certificate`}
												/>
											</div>
										</a>
									);
								})}
							</div>
						</div>

						<div className='divider'>
							<span className='outer-line'></span>
							<span className='v-card'>
								<Icon name='id badge' size='small' />
							</span>
							<span className='outer-line'></span>
						</div>

						<div className='badges'>
							<h2>BADGES</h2>
							<p>(Hover Badge To Verify)</p>
							<div className='badges-container'>
								{badges.map((badge) => {
									return (
										<Popup
											key={badge.id}
											className='badge-verify'
											hoverable
											clickable
											inverted
											position='top center'
											trigger={
												<div className='badge-image'>
													<Image
														src={badge.badgeImage}
														size='large'
														alt={`${badge.badgeName} Badge`}
													/>
												</div>
											}
											content={
												<a
													href={badge.badgeUrl}
													target='_blank'
													rel='noreferrer nofollow noopener'
												>
													<Button size='small' className='verify-btn'>
														CLICK TO VERIFY BADGE
													</Button>
												</a>
											}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default LearningHistory;
