import React from 'react';
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
import UpdateCategory from '@/src/components/pages/admin/update-category';
import AddSubcategory from '@/src/components/pages/admin/add-subcategory';
import UpdateSubcategory from '@/src/components/pages/admin/update-subcategory';
import DeleteSubcategory from '@/src/components/pages/admin/delete-subcategory';
import {
	getCategoryById,
	getSubcategoriesByCategoryId,
} from '@/src/lib/controller/categories-controller';

export default async function CategoryPage({
	params,
}: {
	params: { category: string };
}) {
	const category = await getCategoryById(params.category);
	const breadCrumbItems = [
		{ name: 'Categories', path: '/categories' },
		{
			name: category.title,
			path: `/categories/${category.store_category_id}`,
		},
	];
	if (!category) return notFound();
	const subcategories = await getSubcategoriesByCategoryId(params.category);
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					<Breadcrumb breadcrumbItems={breadCrumbItems} />
				</div>
				<div className='flex'>
					<UpdateCategory category={category} />
					<AddSubcategory
						categoryId={category.store_category_id}
					/>
				</div>
			</div>
			<div className='w-full xl:aspect-subcategory-lg aspect-subcategory rounded-lg shadow relative overflow-clip'>
				<div className='text-primary text-xs lg:text-sm absolute flex items-center justify-center p-1 px-2 h-8 w-fit top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
					{category.title}
				</div>
				<Image
					src={category.image}
					alt=''
					height={200}
					width={1200}
					className='h-full w-full object-cover object-center'
				/>
			</div>
			{subcategories.length < 1 ? (
				<div className='grid place-items-center'>
					<div className='flex flex-col justify-center w-full max-w-[300px] gap-5 items-center'>
						<div className='text-primary'>
							<FilledMarketPlaceIcon />
						</div>
						<div className='text-center font-light '>
							Get started by adding categories to your
							marketplace
						</div>
						<AddSubcategory
							categoryId={category.store_category_id}
						/>
					</div>
				</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 xl:gap-8 w-full pt-5 xl:pt-10'>
					{subcategories.map((a, b) => (
						<div
							className='rounded-lg shadow relative overflow-clip aspect-square w-full shrink-0'
							key={b}
						>
							<Link
								href={`/categories/${category.store_category_id}/${a.store_subcategory_id}`}
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
										<UpdateSubcategory
											subcategory={a}
										/>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<DeleteSubcategory
											subcategory={a}
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
