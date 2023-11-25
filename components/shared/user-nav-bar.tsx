'use client';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { getInitials } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import { NAV_BAR_LINKS } from '@/lib/data';

export function UserNav({ user }: { user: IStore }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex gap-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
						/>
					</svg>
					<p className='hidden lg:block'>{user.name}</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</svg>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-60'
				align='end'
				forceMount
			>
				<DropdownMenuLabel className='font-normal'>
					<div className='flex items-center gap-4 bg-secondary rounded-xl p-2'>
						<div className=''>
							<Avatar className='h-14 w-14'>
								<AvatarImage
									src={user.image || '/anambara.png'}
									alt={user.name || 'Agent User'}
								/>
								<AvatarFallback>
									{getInitials(
										user.name || 'Agent User'
									)}
								</AvatarFallback>
							</Avatar>
						</div>
						<Link
							href='/manage/profile'
							className='flex flex-col space-y-1'
						>
							<p className='text-sm font-medium leading-none'>
								{user.name || 'Agent User'}
							</p>
						</Link>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{NAV_BAR_LINKS.map((link, k) => (
						<DropdownMenuItem
							className='md:hidden'
							asChild
							key={k}
						>
							<Link href={link.href!}>
								{link.title}
								<DropdownMenuShortcut className='h-4 w-4'>
									{link.icon}
								</DropdownMenuShortcut>
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut()}>
					Log out
				</DropdownMenuItem>
				<div className='md:hidden'>
					<DropdownMenuSeparator />
				</div>
				<DropdownMenuSeparator />
				<div className='flex justify-between gap-3 items-center text-xs px-2'>
					<Link href='/privacy'>Privacy Policy</Link>
					<Link href='/terms'>Terms of Service</Link>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
