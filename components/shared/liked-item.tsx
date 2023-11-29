import Image from 'next/image';
import React from 'react';
import * as Icons from '@/lib/icons';
import { formatToNaira } from '@/lib/utils';
import { Button } from '../ui/button';

export default function LikedItem({ product }: { product: IStoreProduct }) {
	return (
		<div className='bg-background px-2 lg:px-5 py-3 rounded-2xl flex gap-2 lg:gap-5 relative'>
			<div className='absolute top-0 left-0 lg:-translate-x-1/2 lg:-translate-y-1/2'>
				<Icons.CloseIcon />
			</div>
			<div className='shrink-0 min-w-[60px] w-2/5 md:w-1/6 max-w-[150px] aspect-square rounded-xl overflow-clip'>
				{/* <Image
					height={300}
					width={300}
					alt=''
					src={product.image[0]}
					className='h-full w-full object-cover'
				/> */}
			</div>
			<div className='w-full flex flex-col justify-between lg:gap-2'>
				<div className='text-sm lg:text-base font-libre font-semibold'>
					{product.name}
				</div>
				<div className='text-xs'>
					{formatToNaira(product.price)}
				</div>
				<div className='hidden lg:flex w-32 bg-gray-200 rounded-full justify-between items-center'>
					<div className='shrink-0'>
						<Icons.MinusIcon />
					</div>
					<h1 className='h-full items-center flex'>1</h1>
					<div className='shrink-0'>
						<Icons.AddIcon />
					</div>
				</div>
				<div className='flex w-full justify-end'>
					<Button className='h-8 md:h-10 rounded-xl'>
						Add To Cart
					</Button>
				</div>
			</div>
		</div>
	);
}
