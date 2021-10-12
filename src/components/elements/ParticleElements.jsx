import Particles from 'react-tsparticles';

const ParticleElements = () => {
	return (
		<Particles
			id='tsparticles'
			options={{
				background: {
					color: {
						value: '#000',
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: 'canvas',
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: false,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 1,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 400,
							duration: 0.4,
						},
					},
				},
				particles: {
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: true,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 1,
					},
					shape: {
						type: 'image',
						image: [
							{
								src: '/images/javascript.png',
								height: 40,
								width: 40,
							},
							{
								src: '/images/react.png',
								height: 60,
								width: 75,
							},
							{
								src: '/images/node.png',
								height: 75,
								width: 80,
							},
							{
								src: '/images/express.png',
								height: 55,
								width: 100,
							},
							{
								src: '/images/redux.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/css.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/html5.png',
								height: 100,
								width: 90,
							},
							{
								src: '/images/sass.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/git.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/github.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/python.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/mongo.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/postgres.png',
								height: 100,
								width: 100,
							},
							{
								src: '/images/fullstackcaveman.png',
								height: 100,
								width: 100,
							},
						],
					},
					size: {
						value: 30,
						random: false,
						anim: {
							enable: true,
							speed: 4,
							size_min: 20,
							sync: true,
						},
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticleElements;
