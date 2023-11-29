// import { getProductById } from '@/app/api/products';
import Breadcrumb from '@/components/layout/breadcrumb';
import DeleteCategory from '@/components/pages/admin/delete-category';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getProductById } from '@/lib/controller/products-controller';
import { CartIcon, EditIcon, ProductsIcon } from '@/lib/icons';
import { Info, ShoppingBag, TagIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function ProductPage({
	params,
}: {
	params: { product: string };
}) {
	const product = await getProductById(params.product);
	console.log(params.product);
	if (!product) return notFound();
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					{/* <Breadcrumb /> */}
				</div>
				<div className='flex gap-3'>
					<Button asChild>
						<Link
							href={'/edit'}
							className='flex gap-1 items-center'
						>
							<EditIcon />
							Edit
						</Link>
					</Button>
					<DeleteCategory />
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<ScrollArea className='whitespace-nowrap'>
					<div className='flex space-x-4'>
						{/* {product.image?.map((image, k) => (
							<figure
								key={k}
								className='shrink-0'
							>
								<div className='overflow-hidden rounded-md '>
									<Image
										src={image}
										alt={image}
										className='aspect-[3/2] h-24 xl:h-48 w-fit object-cover'
										width={600}
										height={400}
									/>
								</div>
							</figure>
						))} */}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
				<div className='flex flex-col gap-3 text-sm'>
					<h1 className='font-libre text-lg font-bold'>
						{product.name}
					</h1>
					<div className='flex gap-2 items-center'>
						<TagIcon className='text-primary' />
						<span>{product.price}</span>
					</div>
					<div className='flex gap-2 items-center'>
						<ShoppingBag className='text-primary' />
						<span>
							{product.stockOption || 'Unlimited'} stock
						</span>
					</div>
					<div className='flex gap-2 items-center'>
						<Info className='text-primary' />
						<span>{product.status || 'Active'}</span>
					</div>
					{product.description && (
						<>
							<h1 className='font-libre text-lg font-bold h-10 flex items-center'>
								Description
							</h1>
							<div className='flex items-center max-w-md w-full'>
								<span>{product.description}</span>
							</div>
						</>
					)}
					{product.tags && (
						<>
							<h1 className='font-libre text-lg font-bold h-10 flex items-center'>
								Tags
							</h1>
							<div className='flex items-center w-full gap-3'>
								{/* {product.tags.map((tag, key) => (
									<Button
										className=' font-light capitalize'
										key={key}
									>
										{tag}
									</Button>
								))} */}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
