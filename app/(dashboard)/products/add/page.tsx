// import { getCategories, getSubcategoryById } from '@/app/api/categories';
import NewProductForm from '@/components/forms/add-products';
import {
	getCategories,
	getSubcategoriesByCategoryId,
} from '@/lib/controller/categories-controller';
import Image from 'next/image';
import React from 'react';

export default async function AddProductPage({
	searchParams,
}: {
	searchParams: { category: string; subcategory: string };
}) {
	// const subcategory = await getSubcategoryById(searchParams.subcategory);
	// const categories = await getCategories();
	const subcategory = await getSubcategoriesByCategoryId(
		searchParams.subcategory
	);
	const categories = await getCategories();
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					Add Product
				</div>
			</div>
			<div className='grid lg:grid-cols-2 gap-5 lg:gap-20 xl:gap-32'>
				<div className=''>
					<NewProductForm
						subcategory={subcategory}
						categories={categories}
					/>
				</div>
				{subcategory && (
					<div className='w-full aspect-[5/6] rounded-lg shadow relative overflow-clip'>
						<div className='text-primary text-xs lg:text-sm absolute flex items-center justify-center p-1 px-2 h-8 w-fit top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
							{subcategory?.title}
						</div>
						<Image
							src={subcategory?.image}
							alt=''
							height={200}
							width={1200}
							className='h-full w-full object-cover object-center rounded-lg'
						/>
					</div>
				)}
			</div>
		</div>
	);
}
