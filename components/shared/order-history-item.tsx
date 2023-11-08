import Image from 'next/image';
import React from 'react';

export default function OrderHistoryItem({ id }: IOrderItem) {
	return (
		<div className='bg-background px-2 lg:px-5 py-3 rounded-2xl flex gap-2 lg:gap-5'>
			<div className='shrink-0 min-w-[60px] w-1/6 aspect-square rounded-xl overflow-clip'>
				<Image
					height={300}
					width={300}
					alt=''
					src='/nike.png'
					className='h-full w-ful object-cover'
				/>
			</div>
			<div className='w-full flex flex-col justify-between lg:gap-2'>
				<div className='text-sm lg:text-base font-libre font-semibold'>
					Payment Successful
				</div>
				<div className='text-xs'>Nike</div>
				<div className='text-xs line-clamp-1 lg:line-clamp-2'>
					Your order 3344 has been received. Your order will be
					ready for delivery from 12th - 13th of April.
				</div>
				<div className='text-xs text-end'>10th April, 2023</div>
			</div>
		</div>
	);
}
