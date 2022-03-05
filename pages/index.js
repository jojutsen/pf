import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import { IoLogoFacebook, IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoMdClose } from 'react-icons/io';
import { FaArtstation } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const social = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/mbaharip07',
		icon: <IoLogoFacebook size={24} />,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/mbaharip_',
		icon: <IoLogoTwitter size={24} />,
	},
	{
		name: 'Github',
		url: 'https://www.github.com/mbaharip',
		icon: <IoLogoGithub size={24} />,
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/mbaharip/',
		icon: <IoLogoLinkedin size={24} />,
	},
	{
		name: 'Artstation',
		url: 'https://www.artstation.com/mbaharip',
		icon: <FaArtstation size={24} />,
	},
];

export default function Home() {
	const [imgSize, setImgSize] = useState({ width: 512, height: 512 });
	const [expand, setExpand] = useState(false);

	useEffect(() => {
		if (isMobile) {
			setImgSize({ width: 256, height: 256 });
		}
	}, []);

	return (
		<div className='w-screen max-h-screen h-screen bg-zinc-900 overflow-hidden grid place-items-center'>
			<Image src={`/main.svg`} alt={`mbahArip`} width={imgSize.width} height={imgSize.height} objectFit={`contain`} />
			{isMobile ? (
				<>
					<div>
						{expand ? (
							<span
								className={`text-zinc-400 transition-all duration-150 fixed top-6 right-6 z-50`}
								onTouchStart={() => {
									setExpand(false);
								}}
							>
								<IoMdClose size={36} />
							</span>
						) : (
							<span
								className={`text-zinc-400 transition-all duration-150 fixed top-6 right-6 z-50`}
								onTouchStart={() => {
									setExpand(true);
								}}
							>
								<GiHamburgerMenu size={36} />
							</span>
						)}
					</div>
					<div className={`w-screen h-screen absolute bg-zinc-800 z-10 ${expand ? 'top-0' : '-top-[100vh]'} transition-all duration-150`}>
						<div className='flex flex-col w-full h-full text-zinc-400 justify-center px-8 gap-8 text-xl'>
							{social.map((item) => (
								<Link key={item.name} href={item.url}>
									<a
										target={`_blank`}
										className='flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-color duration-150'
									>
										{item.icon} {item.name}
									</a>
								</Link>
							))}
						</div>
					</div>
				</>
			) : (
				<div className={`w-screen absolute bottom-4 p-4 flex gap-4 overflow-hidden justify-center`}>
					{social.map((item) => (
						<Link key={item.name} href={item.url}>
							<a target={`_blank`} className='flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-color duration-150'>
								{item.icon} {item.name}
							</a>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
