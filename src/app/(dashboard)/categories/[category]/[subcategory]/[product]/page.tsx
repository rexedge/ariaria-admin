import Breadcrumb from '@/src/components/layout/breadcrumb';
import React from 'react';

export default async function ProductPage({
	params,
}: {
	params: { category: string; subcategory: string; product: string };
}) {
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					{/* <Breadcrumb /> */}
				</div>
				<div className='flex'>
					{/* <UpdateSubcategory subcategory={subcategory} />
					<AddSubcategory /> */}
				</div>
			</div>
		</div>
	);
}
