import '../styles/globals.css';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title='paddd | HOME'
				description='Ryan frf Personal Page.'
				canonical='https://ryanfrf.vercel.app/'
				openGraph={{
					url: 'https://ryan.vercel.app/',
					title: 'paddd | HOME',
					description: 'Ryan frf Personal Page.',
					images: [
						{
							url: 'https://ryan.vercel.app/frf.png',
						},
					],
					site_name: 'paddd| HOME',
				}}
				twitter={{
					handle: '@ryan.frf',
					site: '@ryan.frf',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
