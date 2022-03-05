import '../styles/globals.css';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextSeo
				title='mbahArip Homepage'
				description='Arief Rachmawan personal page.'
				canonical='https://www.mbaharip.me/'
				openGraph={{
					url: 'https://www.mbaharip.me/',
					title: 'mbahArip Homepage',
					description: 'Arief Rachmawan personal page.',
					images: [
						{
							url: 'https://www.mbaharip.me/og-img.png',
						},
					],
					site_name: 'mbahArip Homepage',
				}}
				twitter={{
					handle: '@mbaharip_',
					site: '@mbaharip_',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
