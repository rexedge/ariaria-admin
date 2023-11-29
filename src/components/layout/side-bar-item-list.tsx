import React from 'react';
import SideBarItem from './side-bar-item';
import { SIDE_BAR_LINKS } from '@/src/lib/data';
import Image from 'next/image';
import { Button } from '../ui/button';
import { LogoutIcon } from '@/src/lib/icons';

export default function SideBarItemList() {
	return (
		<div className='hidden lg:flex flex-col w-52 gap-10 2xl:gap-20 fixed pt-28 2xl:pt-40'>
			<div className='flex flex-col gap-3 2xl:gap-6'>
				{SIDE_BAR_LINKS.map((link, key) => (
					<SideBarItem
						key={key}
						name={link.name}
						href={link.href}
						icon={link.icon}
					/>
				))}
			</div>
			<div className='flex flex-col items-center justify-center'>
				<Image
					src='/lamp.png'
					alt=''
					height={130}
					width={130}
					className=''
				/>
				<Button className='rounded-xl mb-8 2xl:mb-16'>
					All Permissions
				</Button>
				<Button
					variant={'ghost'}
					className={`flex gap-2 h-10 w-52 justify-start pl-8 items-center`}
				>
					<LogoutIcon /> Logout
				</Button>
			</div>
		</div>
	);
}
