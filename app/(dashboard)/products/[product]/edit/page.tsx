import { getProductById } from '@/app/api/products';
import UpdateProductForm from '@/components/forms/update-product';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function UpdateProductPage({
	params,
}: {
	params: { product: string };
}) {
	const product = await getProductById(params.product);
	if (!product) return notFound();
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					Edit Product
				</div>
			</div>
			<div className='grid lg:grid-cols-2 gap-5 lg:gap-20 xl:gap-32'>
				<div className=''>
					<UpdateProductForm product={product} />
				</div>
				<div className='w-full aspect-[5/6] rounded-lg shadow relative overflow-clip'>
					<div className='text-primary text-xs lg:text-sm absolute flex items-center justify-center p-1 px-2 h-8 w-fit top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
						{product?.category}
					</div>
					<Image
						src={product?.image[0]}
						alt=''
						height={200}
						width={1200}
						className='h-full w-full object-cover object-center'
					/>
				</div>
			</div>
		</div>
	);
}
