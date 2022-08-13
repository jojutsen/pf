import '../styles/globals.css';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title='paddd | HOME'
				description='Ryan frf Personal Page.'
				canonical='https://www.mbaharip.me/'
				openGraph={{
					url: 'https://www.mbaharip.me/',
					title: 'paddd | HOME',
					description: 'Ryan frf Personal Page.',
					images: [
						{
							url: 'https://www.mbaharip.me/og-img.png',
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
