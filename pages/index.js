import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoInstagram, IoMdClose } from 'react-icons/io';
import { FaArtstation, FaDev } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const social = [
	{
		name: 'Instagram',
		url: 'https://instagram.com/ryan.frf',
		icon: <IoLogoInstagram size={24} />,
	},
	{
		name: 'Dev',
		url: 'https://dev.to/ryanfrf',
		icon: <FaDev size={24} />,
	},
];

export default function Home() {
	const [imgSize, setImgSize] = useState({ width: 512, height: 256 });
	const [expand, setExpand] = useState(false);

	return (
		<div className='bg-zinc-900 w-screen m-auto grid place-items-center'>
			<div className='w-screen max-w-screen-lg max-h-screen h-screen bg-zinc-900 flex flex-col relative'>
				<button className='absolute top-0 right-0 text-zinc-50 m-4 p-2 md:hidden z-20' onClick={() => setExpand(!expand)}>
					{expand ? <IoMdClose size={32} /> : <GiHamburgerMenu size={32} />}
				</button>
				<div
					className={`w-full h-full absolute ${
						expand ? 'top-0' : '-top-full'
					} left-0 bg-zinc-900 z-10 transition-all duration-150 flex items-start justify-center gap-4 flex-col`}
				>
					{social.map((item) => (
						<Link key={item.name} href={item.url}>
							<a
								target={`_blank`}
								className='flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-color duration-150 mx-8 text-lg'
							>
								{item.icon} {item.name}
							</a>
						</Link>
					))}
				</div>
				<div className='w-2/3 h-full mx-auto flex flex-col items-center justify-center gap-8'>
					<Image src={`/frf.png`} alt={`ryanfrf`} width={imgSize.width} height={imgSize.height} objectFit={`contain`} />
					<div className={`w-full md:flex gap-4 overflow-hidden justify-center hidden`}>
						{social.map((item) => (
							<Link key={item.name} href={item.url}>
								<a
									target={`_blank`}
									className='flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-color duration-150'
								>
									{item.icon} {item.name}
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className='absolute bottom-0 left-0 p-0 m-0 flex items-end md:w-auto w-2/3'>
					<Image src={`/under-construction.png`} alt={`Under Construction`} width={1077 / 2.5} height={658 / 2.5} objectFit={`contain`} />
				</div>
			</div>
		</div>
	);
}
