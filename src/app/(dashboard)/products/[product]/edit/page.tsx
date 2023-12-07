import UpdateProductForm from '@/src/components/forms/update-product';
import {
	getCategories,
	getSubcategoriesByCategoryId,
} from '@/src/lib/controller/categories-controller';
import { getProductById } from '@/src/lib/controller/products-controller';
import { getSubcategoryById } from '@/src/lib/controller/subcategories-controller';
import { notFound } from 'next/navigation';

export default async function UpdateProductPage({
	params,
}: {
	params: { product: string };
}) {
	const product = await getProductById(params.product);
	if (!product) return notFound();
	const categories = await getCategories();
	const subcategory = await getSubcategoryById(product.subcategory_id);
	const subcategories = await getSubcategoriesByCategoryId(
		product.category_id
	);
	return (
		<div className='min-h-[80svh] xl:p-5 flex flex-col gap-5'>
			<div className='flex items-center justify-between'>
				<div className='text-sm 2xl:text-base font-libre'>
					Edit Product
				</div>
			</div>
			<div className='grid lg:grid-cols-2 gap-5 lg:gap-20 xl:gap-32'>
				<UpdateProductForm
					product={product}
					categories={categories}
					subcategory={subcategory}
					iSubcategories={subcategories}
				/>
			</div>
		</div>
	);
}
