import { FilledMarketPlaceIcon, MoreIcon } from '@/lib/icons';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Breadcrumb from '@/components/layout/breadcrumb';
import AddCategory from '@/components/pages/admin/add-category';
import UpdateCategory from '@/components/pages/admin/update-category';
import DeleteCategory from '@/components/pages/admin/delete-category';
import { getCategories } from '@/lib/controller/categories-controller';

export default async function CategoriesPage() {
	const breadCrumbItems = [{ name: 'Categories', path: '/categories' }];
	const categories = await getCategories();
	return (
		<div className='min-h-[80svh] xl:p-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					<Breadcrumb breadcrumbItems={breadCrumbItems} />
				</div>
				{categories.length > 0 && (
					<div>
						<AddCategory />
					</div>
				)}
			</div>
			{categories.length < 1 ? (
				<div className='h-full grid place-items-center min-h-[40svh]'>
					<div className='flex flex-col justify-center w-80 gap-5 items-center'>
						<div className='text-primary'>
							<FilledMarketPlaceIcon />
						</div>
						<div className='text-center font-light '>
							Get started by adding categories to your
							marketplace
						</div>
						<AddCategory />
					</div>
				</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full pt-5 xl:pt-10'>
					{categories.map((a, b) => (
						<div
							className='rounded-lg shadow relative overflow-clip aspect-square w-full shrink-0'
							key={b}
						>
							<Link
								href={`/categories/${a.store_category_id}`}
							>
								<Image
									src={a.image}
									alt='Ariaria Fashion Image'
									quality={100}
									fill
									className='object-cover'
								/>
								<div className='text-background text-xs absolute flex items-end p-2 h-10 w-full bottom-0 bg-gradient-to-t from-[#552A00]/70 via-[#552A00]/50 to-[#552A00]/0'>
									{a.title}
								</div>
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<div className='text-primary absolute flex items-center justify-center p-1 h-8 w-8 top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
										<MoreIcon />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className='absolute -left-4 -top-8'
									sideOffset={0}
								>
									<DropdownMenuItem asChild>
										<UpdateCategory
											category={a}
										/>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<DeleteCategory
											category={a}
										/>
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
