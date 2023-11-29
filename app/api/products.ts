import { ALL_PRODUCTS } from '@/lib/data';
import { slugify } from '@/lib/utils';

export const getProducts = async (): Promise<Partial<IStoreProduct>[]> =>
	ALL_PRODUCTS;

export const addReview = async (
	id: string,
	review: IReview
): Promise<IReview[] | undefined> => {
	const product = await getProductById(id);
	if (product) {
		product.reviews?.push(review);
	}
	return product?.reviews;
};

export const getProductById = async (
	id: string
): Promise<Partial<IStoreProduct> | undefined> =>
	getProducts().then((products) =>
		products.find((p) => slugify(p.name!) === id)
	);
