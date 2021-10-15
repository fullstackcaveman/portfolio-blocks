import Home from './components/Home';
import { useGA4React } from 'ga-4-react';

const App = () => {
	const ga = useGA4React();
	console.log(ga);

	return (
		<>
			<Home />;
		</>
	);
};

export default App;
