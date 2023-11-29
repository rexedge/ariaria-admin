import React from 'react';
// import { getSubcategoryById } from '@/app/api/categories';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/src/components/layout/breadcrumb';
import { FilledMarketPlaceIcon, MoreIcon } from '@/src/lib/icons';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import Link from 'next/link';
import { slugify } from '@/src/lib/utils';
// import { getProducts } from '@/app/api/products';
import { Button } from '@/src/components/ui/button';
import { EditIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { getProducts } from '@/src/lib/controller/products-controller';

export default async function ProductsPage() {
	const products: IStoreProduct[] = await getProducts();
	console.log(products);
	const breadCrumbItems = [{ name: 'Products', path: '/products' }];
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					<Breadcrumb breadcrumbItems={breadCrumbItems} />
				</div>
				<div className='flex'>
					<Button
						className='w-8 h-8 lg:h-8 lg:w-fit'
						asChild
					>
						<Link
							href={`/products/add`}
							className=' whitespace-nowrap'
						>
							<span className='lg:hidden'>
								<PlusIcon />
							</span>
							<span className='hidden lg:flex whitespace-nowrap '>
								Add Product
							</span>
						</Link>
					</Button>
				</div>
			</div>
			{products.length < 1 ? (
				<div className='grid place-items-center'>
					<div className='flex flex-col justify-center w-full max-w-[300px] gap-5 items-center'>
						<div className='text-primary'>
							<FilledMarketPlaceIcon />
						</div>
						<div className='text-center font-light '>
							Get started by adding products to your
							marketplace
						</div>
						<Button
							className='w-8 h-8 lg:h-8 lg:w-40 font-libre'
							asChild
						>
							<Link href={'/products/add'}>
								<span className='lg:hidden'>
									<PlusIcon />
								</span>
								<span className='hidden lg:flex whitespace-nowrap '>
									Add Product
								</span>
							</Link>
						</Button>
					</div>
				</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 xl:gap-8 w-full pt-5 xl:pt-10'>
					{products.map((a, b) => (
						<div
							className='rounded-lg shadow relative overflow-clip aspect-square w-full shrink-0'
							key={b}
						>
							<Link href={`/products/${a.store_id}`}>
								<Image
									src={
										a.image
											? a.image[0]
											: '/pph.jpg'
									}
									alt='Ariaria Fashion Image'
									quality={100}
									fill
									className='object-cover'
								/>
								<div className='text-background text-xs absolute flex items-end p-2 h-10 w-full bottom-0 bg-gradient-to-t from-[#552A00]/70 via-[#552A00]/50 to-[#552A00]/0'>
									{a.name}
								</div>
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className='text-primary absolute flex items-center justify-center p-1 h-8 w-8 top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
										<MoreIcon />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className='absolute -left-4'
									sideOffset={0}
								>
									<DropdownMenuItem asChild>
										<Link
											href={`/products/${slugify(
												a.name
											)}/edit`}
										>
											<EditIcon className='mr-2 h-4 w-4' />
											<span>Edit</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className='text-destructive '>
										<TrashIcon className='mr-2 h-4 w-4' />
										<span>Delete</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
