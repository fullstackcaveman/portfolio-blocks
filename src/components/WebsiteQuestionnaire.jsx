import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { Button, Icon, Popup } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import * as emailjs from 'emailjs-com';
import SeoSettings from '../seo/SeoSettings';
import ReactPixel from 'react-facebook-pixel';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { amber } from '@mui/material/colors';

ReactPixel.pageView();

const emailjsUser = process.env.REACT_APP_EMAIL_USER;

const initialValues = {
	companyName: '',
	name: '',
	email: '',
	businessDescription: '',
	servicesOffered: '',
	targetAudience: '',
	usp: '',
	otherThings: '',
	websiteOne: '',
	webLink1Likes: '',
	websiteTwo: '',
	webLink2Likes: '',
	websiteThree: '',
	webLink3Likes: '',
	budget: '',
	launchDate: '',
	anythingElse: '',
	newWebsite: true,
	websiteRedesign: false,
	cta: false,
	chat: false,
	social: false,
	banners: false,
	reviews: false,
	otherBox: false,
	supportYes: true,
	supportNo: false,
	hostYes: true,
	hostNo: false,
	seoYes: true,
	seoNo: false,
	acceptPayments: false,
	eCommerce: false,
};

const WebsiteQuestionnaire = () => {
	const [value, setValue] = useState(initialValues);
	const [emailSent, setEmailSent] = useState(false);
	const [emailSentError, setEmailSentError] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [newOrUpdateWebsite, setNewOrUpdateWebsite] = useState('newWebsite');
	const [supportSelection, setSupportSelection] = useState('supportYes');
	const [hostingSelection, setHostingSelection] = useState('hostYes');
	const [seoSelection, setSeoSelection] = useState('seoYes');

	const history = useHistory();

	emailjs.init(emailjsUser);

	const handleClose = () => {
		history.push('/');
	};

	const form = useRef();

	useEffect(() => {
		document.title = `FullStackCaveman | Website Questionnaire`;
	}, []);

	const pageSeo = {
		pageTitle: '| Website Questionnaire',
		pageDescription: 'Website work qusetionnaire',
		pageKeywords: [
			'questionnaire',
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
		pageUrl: '/website-questionnaire',
		pageImage: '',
	};

	const handleChange = (e) => {
		const valueToUse =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		setValue({
			...value,
			[e.target.name]: valueToUse,
		});
	};

	const handleNewOrRedesign = (e) => {
		setValue({
			...value,
			newWebsite: !value.newWebsite,
			websiteRedesign: !value.websiteRedesign,
		});
		setNewOrUpdateWebsite(e.target.value);
	};

	const handleYesNo = (e) => {
		if (e.target.value.includes('support')) {
			setValue({
				...value,
				supportYes: !value.supportYes,
				supportNo: !value.supportNo,
			});
			setSupportSelection(e.target.value);
		} else if (e.target.value.includes('host')) {
			setValue({
				...value,
				hostYes: !value.hostYes,
				hostNo: !value.hostNo,
			});
			setHostingSelection(e.target.value);
		} else if (e.target.value.includes('seo')) {
			setValue({
				...value,
				seoYes: !value.seoYes,
				seoNo: !value.seoNo,
			});
			setSeoSelection(e.target.value);
		}
	};

	const handleEmailSuccess = () => {
		setEmailSent(true);
		setValue(initialValues);
		setTimeout(() => {
			setEmailSent(false);
			history.push('/');
		}, 2000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);

		emailjs
			.sendForm(
				'service_phym552',
				'template_1of61ih',
				form.current,
				emailjsUser
			)
			.then(
				(res) => {
					handleEmailSuccess();
				},
				(err) => {
					setEmailSentError(true);
					console.error('Failed...', err);
				}
			);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='web-questionnaire-section'
		>
			<SeoSettings {...pageSeo} />
			<div className='close-icon' onClick={handleClose}>
				<AiOutlineCloseCircle />
			</div>
			<div className='page-title'>
				<h2>
					<span>WEBSITE</span> <span className='accent'>QUESTIONNAIRE</span>
				</h2>
			</div>
			<div className='info-section'>
				<div className='divider'>
					<span className='outer-line'></span>
					<span className='v-card'>{<FaWpforms />}</span>
					<span className='outer-line'></span>
				</div>

				<div className='personal-info'>
					<div className='split-section'>
						<div className='contact'>
							<div className='m10'>
								<div className='form'>
									<div className='note'>
										<p>
											Fill out the form below so that we can get a better
											understanding of your project.
										</p>
										<p>
											Click on item's{' '}
											<span style={{ color: 'teal' }}>&#x1F6C8;</span> icon for
											more information
										</p>
									</div>

									<form
										ref={form}
										className='form-fields'
										onSubmit={handleSubmit}
									>
										<div className='input-field'>
											<TextField
												required
												id='filled-required'
												label='Company Name'
												variant='filled'
												onChange={handleChange}
												name='companyName'
												size='small'
												fullWidth
												value={value.companyName}
												color='warning'
											/>
										</div>
										<div className='input-field'>
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
										<div className='input-field'>
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
										<div className='input-field multi-select'>
											<FormControl component='fieldset' required>
												<FormLabel component='legend'>
													Do You Want to Build a New Website or Redesign an
													Existing One?
												</FormLabel>
												<RadioGroup
													row
													name='new-or-update-website-group'
													value={newOrUpdateWebsite}
													onChange={handleNewOrRedesign}
												>
													<FormControlLabel
														name='newWebsite'
														value='newWebsite'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='New Website'
													/>
													<FormControlLabel
														name='websiteRedesign'
														value='websiteRedesign'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='Redesign Website'
													/>
												</RadioGroup>
											</FormControl>
										</div>
										<div className='input-field'>
											<TextField
												required
												id='filled-multiline-static'
												label='Describe your business in a few sentences:'
												multiline
												rows={4}
												value={value.businessDescription}
												onChange={handleChange}
												name='businessDescription'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field'>
											<TextField
												required
												id='services-offered'
												label='What services do you offer?'
												multiline
												rows={4}
												value={value.servicesOffered}
												onChange={handleChange}
												name='servicesOffered'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field'>
											<TextField
												required
												id='target-audience'
												label='Who is your target audience?'
												multiline
												rows={4}
												value={value.targetAudience}
												onChange={handleChange}
												name='targetAudience'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field'>
											<TextField
												required
												id='usp'
												label='What makes your services unique?'
												multiline
												rows={4}
												value={value.usp}
												onChange={handleChange}
												name='usp'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field multi-select'>
											<FormGroup>
												<FormLabel component='legend'>
													What Features Does Your Website Need to Be Successful?
												</FormLabel>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.acceptPayments}
															name='acceptPayments'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Accept Payments'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.banners}
															name='banners'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Announcement Banners'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.cta}
															name='cta'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Call To Action (CTA) Buttons (ie: Newsletter Signup)'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.eCommerce}
															name='eCommerce'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='eCommerce'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.chat}
															name='chat'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Live Chat'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.reviews}
															name='reviews'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Reviews Section'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.social}
															name='social'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Social Media Integration'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={value.otherBox}
															name='otherBox'
															onChange={handleChange}
															sx={{
																color: amber[700],
																'&.Mui-checked': { color: amber[700] },
															}}
														/>
													}
													label='Other'
												/>
												{value.otherBox ? (
													<motion.section
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														exit={{ opacity: 0 }}
														className='web-questionnaire-section'
													>
														<TextField
															id='otherThings'
															label='What else?'
															multiline
															rows={4}
															value={value.otherThings}
															onChange={handleChange}
															name='otherThings'
															variant='filled'
															fullWidth
															color='warning'
														/>
													</motion.section>
												) : (
													<></>
												)}
											</FormGroup>
										</div>

										<div className='input-field'>
											<FormGroup>
												<FormLabel component='legend'>
													What Are Two or Three of Your Favorite Websites in
													your type of business?
												</FormLabel>
												<FormGroup>
													<TextField
														id='webLink1'
														variant='filled'
														label='Website Link #1'
														onChange={handleChange}
														name='websiteOne'
														size='small'
														fullWidth
														value={value.websiteOne}
														color='warning'
													/>
													<TextField
														id='webLink1-likes'
														label="What do you like about it? What don't you like about it? (Be specific!)"
														multiline
														rows={4}
														value={value.webLink1Likes}
														onChange={handleChange}
														name='webLink1Likes'
														variant='filled'
														fullWidth
														color='warning'
													/>
												</FormGroup>
												<FormGroup>
													<TextField
														id='webLink2'
														variant='filled'
														label='Website Link #2'
														onChange={handleChange}
														name='websiteTwo'
														size='small'
														fullWidth
														value={value.websiteTwo}
														color='warning'
													/>
													<TextField
														id='webLink2-likes'
														label="What do you like about it? What don't you like about it? (Be specific!)"
														multiline
														rows={4}
														value={value.webLink2Likes}
														onChange={handleChange}
														name='webLink2Likes'
														variant='filled'
														fullWidth
														color='warning'
													/>
												</FormGroup>
												<FormGroup>
													<TextField
														id='webLink3'
														variant='filled'
														label='Website Link #3'
														onChange={handleChange}
														name='websiteThree'
														size='small'
														fullWidth
														value={value.websiteThree}
														color='warning'
													/>
													<TextField
														id='webLink3-likes'
														label="What do you like about it? What don't you like about it? (Be specific!)"
														multiline
														rows={4}
														value={value.webLink3Likes}
														onChange={handleChange}
														name='webLink3Likes'
														variant='filled'
														fullWidth
														color='warning'
													/>
												</FormGroup>
											</FormGroup>
										</div>
										<div className='input-field multi-select'>
											<FormControl component='fieldset' required>
												<FormLabel component='legend'>
													Would You Like Us to Provide Ongoing Support and
													Maintenance?{' '}
													<Popup
														style={{
															border: '2px solid #ffb400',
														}}
														inverted
														hoverable
														position='top center'
														size='small'
														on={['click']}
														wide
														trigger={
															<span className='info-btn'>&#x1F6C8;</span>
														}
														header={<h5>Support & Maintenance</h5>}
														content={
															<>
																<p>
																	As you may know, internet browsers are always
																	updating in response to security threats and
																	upgrades.
																</p>
																<p>
																	Just putting a website up on the internet and
																	never doing anything else with it can lead to
																	all sorts of issues including attacks from
																	individuals that can hijack your website.
																</p>
																<p>
																	We provide a monthly service plan to protect
																	and update your website to keep it secure and
																	compliant with browser policies.
																</p>
															</>
														}
													/>
												</FormLabel>
												<RadioGroup
													row
													name='support'
													value={supportSelection}
													onChange={handleYesNo}
												>
													<FormControlLabel
														name='supportYes'
														value='supportYes'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='Yes'
													/>
													<FormControlLabel
														name='supportNo'
														value='supportNo'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='No'
													/>
												</RadioGroup>
											</FormControl>
										</div>
										<div className='input-field multi-select'>
											<FormControl component='fieldset' required>
												<FormLabel component='legend'>
													Would you like us to host your website?{' '}
													<Popup
														style={{
															border: '2px solid #ffb400',
														}}
														inverted
														hoverable
														position='top center'
														size='small'
														on={['click']}
														wide
														trigger={
															<span className='info-btn'>&#x1F6C8;</span>
														}
														header={<h5>Hosting Your Website</h5>}
														content={
															<>
																<p>Hosting with us is easy.</p>
																<p>
																	Just point your DNS (we'll show you how) to
																	our servers.
																</p>
																<strong>Perks:</strong>
																<ul>
																	<li>
																		Unlimited email accounts for your company
																	</li>
																	<li>
																		Free SSL Certificate to protect sensitive
																		information
																	</li>
																	<li>Dedicated Admin Area</li>
																	<li>Powerful Caching Technology</li>
																	<li>Fast Website Load Times</li>
																	<li>
																		Quick Intergation of the Latest Technologies
																	</li>
																	<li>Smart WAF to protect you from hacks</li>
																	<li>
																		AI anti-bot against bruteforce attacks
																	</li>
																	<li>24/7 Server Monitoring</li>
																	<li>99.9% Uptime</li>
																	<li>
																		Distributed & redundant backups to safeguard
																		data
																	</li>
																</ul>
															</>
														}
													/>
												</FormLabel>
												<RadioGroup
													row
													name='host'
													value={hostingSelection}
													onChange={handleYesNo}
												>
													<FormControlLabel
														name='hostYes'
														value='hostYes'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='Yes'
													/>
													<FormControlLabel
														name='hostNo'
														value='hostNo'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='No'
													/>
												</RadioGroup>
											</FormControl>
										</div>
										<div className='input-field multi-select'>
											<FormControl component='fieldset' required>
												<FormLabel component='legend'>
													Are You Interested In Our Search Engine Optimization
													Services?{' '}
													<Popup
														style={{
															border: '2px solid #ffb400',
														}}
														inverted
														hoverable
														position='top center'
														size='small'
														on={['click']}
														wide
														trigger={
															<span className='info-btn'>&#x1F6C8;</span>
														}
														header={<h5>Search Engine Optimization (SEO)</h5>}
														content={
															<>
																<p>
																	<strong>Myth:</strong> "If I put a website on
																	the internet, everyone will see it."
																</p>
																<p>
																	Brands need SEO first, as it is the most
																	viable and cost-effective way to both
																	understand and reach customers in the key
																	moments that matter.
																</p>
																<ul>
																	<li>
																		<strong>
																			Organic Search is Most Often the Primary
																			Source of Website Traffic
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO Builds Trust & Credibility
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO is the Best Way to Understand the
																			Voice of the Consumer
																		</strong>
																	</li>
																	<li>
																		<strong>
																			Good SEO Also Means a Better User
																			Experience
																		</strong>
																	</li>
																	<li>
																		<strong>
																			Local SEO Means Increased Engagement,
																			Traffic & Conversions
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO Impacts the Buying Cycle
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO is Constantly Improving and Best
																			Practices are Always Being Updated
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO is Relatively Cheap and Very
																			Cost-Effective
																		</strong>
																	</li>
																	<li>
																		<strong>
																			SEO is Always Going to Be Here
																		</strong>
																	</li>
																</ul>

																<p>
																	We offer SEO plans to make sure your target
																	audience finds you first.
																</p>
															</>
														}
													/>
												</FormLabel>
												<RadioGroup
													row
													name='seo'
													value={seoSelection}
													onChange={handleYesNo}
												>
													<FormControlLabel
														name='seoYes'
														value='seoYes'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='Yes'
													/>
													<FormControlLabel
														name='seoNo'
														value='seoNo'
														control={
															<Radio
																sx={{
																	color: amber[700],
																	'&.Mui-checked': { color: amber[700] },
																}}
															/>
														}
														label='No'
													/>
												</RadioGroup>
											</FormControl>
										</div>

										<div className='input-field'>
											<TextField
												required
												id='budget'
												label='What Is Your Budget?'
												value={value.budget}
												onChange={handleChange}
												name='budget'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field'>
											<TextField
												required
												id='launchDate'
												label='What Is Your Ideal Launch Date for the Website?'
												value={value.launchDate}
												onChange={handleChange}
												name='launchDate'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>
										<div className='input-field'>
											<TextField
												id='anythingElse'
												label='Anything else we should know?'
												multiline
												rows={4}
												value={value.anythingElse}
												onChange={handleChange}
												name='anythingElse'
												variant='filled'
												fullWidth
												color='warning'
											/>
										</div>

										<div className='buttons'>
											<Button
												type='submit'
												size='large'
												className='send-btn'
												disabled={disabled}
											>
												{!emailSent ? (
													<>
														<span className='btn-text'>SEND FORM </span>
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
														<span className='btn-text'>FORM SENT! </span>
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
				</div>
			</div>
		</motion.section>
	);
};

export default WebsiteQuestionnaire;
