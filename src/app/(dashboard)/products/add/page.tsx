import NewProductForm from '@/src/components/forms/add-products';
import { getCategories } from '@/src/lib/controller/categories-controller';
import { getSubcategories } from '@/src/lib/controller/subcategories-controller';
import Image from 'next/image';
import React from 'react';

export default async function AddProductPage({
	searchParams,
}: {
	searchParams: { category: string; subcategory: string };
}) {
	// const subcategories = await getSubcategories();
	const categories = await getCategories();
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					Add Product
				</div>
			</div>
			<div className='grid lg:grid-cols-2 gap-5 lg:gap-20 xl:gap-32'>
				<NewProductForm
					// subcategory={subcategories}
					categories={categories}
				/>
			</div>
		</div>
	);
}
