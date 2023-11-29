'use client';
import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { HeartIcon } from '@/src/lib/icons';
import { formatToNaira, slugify } from '@/src/lib/utils';
import { toast } from 'sonner';
import Link from 'next/link';

export default function ProductCard({
	image,
	name,
	price,
	discountPercent,
	discountPrice,
}: IProduct) {
	const [saved, setSaved] = React.useState<boolean>(false);
	return (
		<div
			className={`group bg-white shadow-xl flex flex-col rounded-3xl overflow-clip w-full max-w-sm`}
		>
			<Link
				href={`/product/${slugify(name)}`}
				className='flex justify-center w-full aspect-[5/7] rounded-2xl overflow-clip relative'
			>
				{discountPercent && (
					<div className='text-white absolute top-0 left-0 items-start justify-start'>
						<svg
							width='108'
							height='88'
							viewBox='0 0 108 88'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='absolute'
						>
							<path
								d='M0.000140118 88L108 -9.44166e-06L-7.6932e-06 0L0.000140118 88Z'
								fill='#FF7F00'
							/>
						</svg>
						<span className='absolute font-libre p-3 text-sm'>
							-{discountPercent}%
						</span>
					</div>
				)}
				<Image
					src={image}
					width={300}
					height={300}
					alt='discount1'
					className='w-full h-full object-cover'
				/>
			</Link>
			<div className='p-5 w-full grid gap-3'>
				<div className='flex justify-between items-center'>
					<h2
						className='text-lg md:text-xl font-medium line-clamp-1'
						title={name}
					>
						{name}
					</h2>
					<div
						className={`w-6 h-6 shrink-0 cursor-pointer hover:scale-110 ${
							saved ? 'text-primary' : 'text-white'
						}`}
						onClick={() => {
							setSaved(!saved);
							toast.success(`${name} saved`);
						}}
					>
						<HeartIcon />
					</div>
				</div>
				<div className='flex gap-3 items-center'>
					<span className='text-lg md:text-lg font-normal'>
						{formatToNaira(price)}
					</span>
					{discountPrice && (
						<span className='text-sm md:text-md font-light text-gray-500 line-through'>
							{formatToNaira(discountPrice)}
						</span>
					)}
				</div>
				<button
					type='button'
					className='relative top-20 group-hover:top-0 transition-all scale-105 duration-500 text-white px-4 py-2 mt-auto rounded-xl bg-primary'
					onClick={() => {
						toast.success(`${name} added to cart`);
					}}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
