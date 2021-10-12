import { v4 as projectId } from 'uuid';

export const projects = [
	{
		id: projectId(),
		projectName: 'Asylum Case Database App',
		client: 'Human Rights First',
		description: '',
		thumbnail:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634070104/Portfolio%20Website/human_rights_first_thumb_tlvbx9.png',
		techStack: ['React', 'Node', 'Express', 'PostGres', 'Ant Design', 'Less'],
		gitHubLinks: [
			'https://github.com/fullstackcaveman/human-rights-first-asylum-fe-a',
			'https://github.com/fullstackcaveman/human-rights-first-asylum-be-a',
		],
		deployedLink: 'none',
	},
	{
		id: projectId(),
		projectName: 'Star Wars Database',
		client: 'Personal Project',
		description: '',
		thumbnail:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634068527/Star%20Wars%20Universe/starwars_thumb_1280x900_mxlhuo.png',
		techStack: [
			'React',
			'Node',
			'Express',
			'MongoDB',
			'MaterialUI',
			'SASS',
			'Heroku',
		],
		gitHubLinks: ['https://github.com/fullstackcaveman/star-wars-universe'],
		deployedLink: 'http://starwars.fullstackcaveman.com/',
	},
	{
		id: projectId(),
		projectName: 'Spacetagram',
		client: 'Personal Project',
		description: '',
		thumbnail:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634068540/Spacetagram/spacetagram_thumb_1280x900_p7vqk7.png',
		techStack: ['React', 'Semantic-UI-React', 'SASS', 'Netlify'],
		gitHubLinks: ['https://github.com/fullstackcaveman/nasa-photo-otd-sf'],
		deployedLink: 'https://nasa-potd.fullstackcaveman.com/',
	},
	{
		id: projectId(),
		projectName: 'Portfolio Website',
		client: 'Personal Project',
		description: '',
		thumbnail:
			'https://res.cloudinary.com/fullstackcaveman/image/upload/v1634068837/Portfolio%20Website/blocks_portfolio_thumb_ob9jd7.png',
		techStack: ['React', 'Semantic-UI-React', 'SASS'],
		gitHubLinks: ['https://github.com/fullstackcaveman/portfolio-blocks'],
		deployedLink: 'https://fullstackcaveman.com/',
	},
];
