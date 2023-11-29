'use client';
import { DashboardIcon } from '@/lib/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SideBarItem({
	name = 'Dashboard',
	href = '/dashboard',
	icon = <DashboardIcon />,
}: {
	name?: string;
	href?: string;
	icon?: React.ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className=''
		>
			<div
				className={`flex text-sm 2xl:text-base gap-2 h-8 2xl:h-10 w-52 justify-start pl-8 items-center hover:text-gray-200 hover:bg-primary/80 ${
					isActive ? 'bg-primary text-white' : ''
				} `}
			>
				{icon}

				{name}
			</div>
		</Link>
	);
}
