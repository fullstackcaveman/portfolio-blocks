import SEO from '@americanexpress/react-seo';

const SeoSettings = (props) => {
	console.log(props);
	return (
		<SEO
			title={`FullStackCaveman ${props.pageTitle}`}
			description={props.pageDescription}
			keywords={props.pageKeywords}
			siteUrl={props.pageUrl}
			// image={{
			// 	src: 'http://example.com/foo.jpg',
			// }}
		/>
	);
};

export default SeoSettings;
