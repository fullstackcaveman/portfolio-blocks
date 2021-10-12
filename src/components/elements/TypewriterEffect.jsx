import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'WEB DEVELOPER',
					'SOFTWARE DEVELOPER',
					'FRONT-END DEVELOPER',
					'BACK-END DEVELOPER',
					'THE "FULLSTACKCAVEMAN"',
				],
				autoStart: true,
				loop: true,
			}}
		/>
	);
};

export default TypewriterEffect;
