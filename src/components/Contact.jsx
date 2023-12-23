import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiMailOpen } from 'react-icons/hi';
import { Button, Icon } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import * as emailjs from '@emailjs/browser';
import SeoSettings from '../seo/SeoSettings';
// import ReactPixel from 'react-facebook-pixel';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';

// ReactPixel.pageView();

const emailjsUser = process.env.REACT_APP_EMAIL_USER;

const initialValues = {
	name: '',
	email: '',
	text: '',
};

const Contact = () => {
	const [value, setValue] = useState(initialValues);
	const [emailSent, setEmailSent] = useState(false);
	const [emailSentError, setEmailSentError] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const navigate = useNavigate();

	emailjs.init(emailjsUser);

	const handleClose = () => {
		navigate('/');
	};

	useEffect(() => {
		document.title = `FullStackCaveman | Contact`;
	}, []);

	const pageSeo = {
		pageTitle: '| Contact',
		pageDescription: 'FullStackCaveman Portfolio Website',
		pageKeywords: [
			'contact',
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
		pageUrl: '/contact',
		pageImage:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634251070/Portfolio%20Website/blocks-portfolio-about-thumb_kmvay3.png',
	};

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
	};

	const handleEmailSuccess = () => {
		setEmailSent(true);
		setTimeout(() => {
			setEmailSent(false);
			setDisabled(true);
		}, 5000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_phym552',
				'template_m3f2yei',
				'.form-fields',
				emailjsUser
			)
			.then(
				(res) => {
					handleEmailSuccess();
				},
				function (err) {
					setEmailSentError(true);
					console.error('Failed...', err);
				}
			);

		setValue(initialValues);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='contact-section'
		>
			<SeoSettings {...pageSeo} />
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>GET</span> <span className='accent'>IN TOUCH</span>
				</h2>
			</div>

			<div className='info-section'>
				<div className='divider'>
					<span className='outer-line'></span>
					<span className='v-card'>{<HiMailOpen />}</span>
					<span className='outer-line'></span>
				</div>

				<div className='personal-info'>
					<div className='split-section'>
						<div className='contact'>
							<div className='m10'>
								<div className='form'>
									<div className='note'>
										<h6>FEEL FREE TO DROP ME A LINE</h6>
										<p>
											If you have any suggestions, a project in mind, or just
											want to say "Hello"... Fill out the form below and I will
											reply shortly.
										</p>
									</div>

									<form className='form-fields' onSubmit={handleSubmit}>
										<div className='name'>
											<TextField
												required
												id='filled-required'
												label='Your Name'
												variant='filled'
												onChange={handleChange}
												name='name'
												size='small'
												fullWidth
												value={value.name}
												color='warning'
											/>
										</div>
										<div className='email'>
											<TextField
												required
												id='filled-required'
												label='Your Email'
												value={value.email}
												onChange={handleChange}
												type='email'
												name='email'
												variant='filled'
												size='small'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='text-area'>
											<TextField
												required
												id='filled-multiline-static'
												label='Your Comment...'
												multiline
												rows={4}
												value={value.text}
												onChange={handleChange}
												name='text'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='buttons'>
											<Button
												type='submit'
												size='large'
												className='resume-btn'
												disabled={disabled}
											>
												{!emailSent ? (
													<>
														<span className='btn-text'>SEND MESSAGE </span>
														<span className='btn-icon'>
															<Icon name='send' />
														</span>
													</>
												) : emailSentError ? (
													<>
														<span className='btn-text'>SEND ERROR </span>
														<span className='btn-icon'>
															<Icon name='exclamation triangle' />
														</span>
													</>
												) : (
													<>
														<span className='btn-text'>MESSAGE SENT! </span>
														<span className='btn-icon'>
															<Icon name='check' />
														</span>
													</>
												)}
											</Button>
										</div>
									</form>
								</div>
							</div>

							<div className='socials'>
								<div id='linkedin' className='social-icon'>
									<a
										href='https://www.linkedin.com/in/fullstackcaveman/'
										target='_blank'
										rel='noreferrer noopener nofollow'
									>
										<FaLinkedin className='linkedin' />
									</a>
								</div>

								<div className='social-icon'>
									<a
										href='https://github.com/fullstackcaveman'
										target='_blank'
										rel='noreferrer'
									>
										<FaGithub id='github' className='github' />
									</a>
								</div>

								<div className='social-icon'>
									<a
										href='https://dev.to/fullstackcaveman'
										target='_blank'
										rel='noreferrer'
									>
										<FaDev id='dev' className='dev' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
