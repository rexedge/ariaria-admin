import { ALL_PRODUCTS } from '@/src/lib/data';
import { getProductById } from './products';

const cart: ICart = {
	products: ALL_PRODUCTS.slice(0, 4),
	// products: [],
};

export const getCart = async (): Promise<ICart> => {
	return cart;
};

export const addToCart = async (productId: string): Promise<ICart> => {
	const product = await getProductById(productId);
	if (product) {
		// cart.products.push({
		// 	name: product.name,
		// 	id: product.id,
		// 	image: product.image,
		// 	price: product.price,
		// });
		cart.products.push(product);
	}
	return cart;
};

export const clearCart = async (): Promise<ICart> => {
	cart.products = [];
	return cart;
};
