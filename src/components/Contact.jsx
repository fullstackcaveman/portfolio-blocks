import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiMailOpen } from 'react-icons/hi';
import { Button, Icon } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import {
	contactPageVariants,
	contactPageTransitions,
} from '../animation/motionSettings';
import * as emailjs from 'emailjs-com';
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
	const history = useHistory();

	emailjs.init(emailjsUser);

	const handleClose = () => {
		history.push('/');
	};

	useEffect(() => {
		document.title = `FullStackCaveman | Contact`;
	}, []);

	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
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
			className='contact-section'
			exit='out'
			animate='in'
			initial='out'
			variants={contactPageVariants}
			transition={contactPageTransitions}
		>
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
						<ul className='contact'>
							<div className='m10'>
								<li>
									<span className='bold'>PHONE</span>
								</li>

								<li>
									<a href='tel:+14067811111'>406.781.1111</a>
								</li>
							</div>

							<div className='m10'>
								<li>
									<span className='bold'>EMAIL</span>
								</li>

								<li>
									<a
										href='mailto:chris@fullstackcaveman.com'
										target='_blank'
										rel='noreferrer'
									>
										chris@fullstackcaveman.com
									</a>
								</li>
							</div>

							<div className='m10'>
								<li>
									<span className='bold'>LOCATION</span>
								</li>

								<li>
									<a
										href='https://goo.gl/maps/mNoRv1Ae2HBcvb5v5'
										target='_blank'
										rel='noreferrer'
									>
										Great Falls, MT
									</a>
								</li>
							</div>

							<div className='m10'>
								<li>
									<span className='bold'>SOCIAL PROFILES</span>
								</li>
								<div className='socials'>
									<a
										href='https://www.linkedin.com/in/fullstackcaveman/'
										target='_blank'
										rel='noreferrer'
									>
										<Button
											color='linkedin'
											circular
											icon='linkedin'
											className='dev'
										/>
									</a>

									<a
										href='https://github.com/fullstackcaveman'
										target='_blank'
										rel='noreferrer'
									>
										<Button
											color='grey'
											circular
											icon='github'
											className='dev'
										/>
									</a>
									<a
										href='https://dev.to/fullstackcaveman'
										target='_blank'
										rel='noreferrer'
									>
										<Button
											color='black'
											circular
											icon='edit'
											className='dev'
										/>
									</a>
								</div>
							</div>
						</ul>

						<div className='form'>
							<div className='note'>
								<h6>FEEL FREE TO DROP ME A LINE</h6>
								<p>
									If you have any suggestions, a project in mind, or just want
									to say "Hello"... Fill out the form below and I will reply
									shortly.
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
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
