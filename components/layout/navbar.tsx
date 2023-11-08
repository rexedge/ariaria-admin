import Image from 'next/image';
import React from 'react';

export default function NavBar() {
	return (
		<div className='flex fixed z-10 bg-white/30 backdrop-blur justify-between items-center w-full shrink-0 px-5 lg:px-12 py-3'>
			<div className='relative shrink-0 hidden lg:block'>
				<input
					className='h-10 rounded-lg border bg-transparent placeholder:text-gray-900 p-2 hidden lg:grid'
					placeholder='Search'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6 absolute top-2 right-4 '
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
			</div>
			<div className='shrink-0'>
				<Image
					src='/logo.png'
					height={50}
					width={65}
					alt='ariaria logo'
					className=' h-20 lg:h-full w-20 lg:w-full object-contain'
				/>
			</div>
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
				<p className='hidden lg:block'>John paul</p>
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
		</div>
	);
}
