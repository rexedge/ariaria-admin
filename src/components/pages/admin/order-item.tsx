import Image from 'next/image';
import React from 'react';

export default function OrderHistory({
	id,
	delivery,
	status,
	products,
	date,
	profile,
}: IOrderItem) {
	return (
		<div className='bg-background p-1 2xl:p-2 grid grid-cols-9 border rounded-2xl gap-2'>
			<div className='shrink-0 col-span-4 aspect-square rounded-xl overflow-clip'>
				<Image
					height={300}
					width={300}
					alt=''
					src='/nike.png'
					className='h-full w-ful object-cover'
				/>
			</div>
			<div className='w-full col-span-5 flex flex-col text-[10px] 2xl:text-base justify-between'>
				<div className='font-libre font-semibold'>Shoes</div>
				<div className='line-clamp-1 '>$20,000</div>
				<div className=''>Size: 32</div>
				<div className='line-clamp-1'>Color: Black</div>
				<div className=''>10th April, 2023</div>
			</div>
		</div>
	);
}
