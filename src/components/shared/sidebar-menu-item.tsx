'use client';
import React from 'react';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarMenuItem({
	name,
	href,
	icon,
}: {
	name: string;
	href: string;
	icon?: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<Button
			asChild
			className='justify-start gap-3 hover:opacity-70'
			variant={pathname === href ? 'default' : 'ghost'}
		>
			<Link
				href={href}
				className=''
			>
				{icon && icon} {name}
			</Link>
		</Button>
	);
}
