import SEO from '@americanexpress/react-seo';

const SeoSettings = (props) => {
	return (
		<SEO
			title={`FullStackCaveman ${props.pageTitle}`}
			description={props.pageDescription}
			keywords={props.pageKeywords}
			siteUrl={props.pageUrl}
			image={{
				src: props.pageImage,
			}}
		/>
	);
};

export default SeoSettings;
