import { headers } from '@/src/app/api/auth/options';
import { BASE_URL, ENDPOINTS } from '../data';

export const getProducts = async () => {
	const url = `${BASE_URL}${ENDPOINTS.products.all}`;
	const allProductsReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const product: IProductsRes = await allProductsReq.json();
	const c = product.data.store.tbl_products;
	return c;
};

export const getProductById = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.products.all}/${id}`;
	const singleProductReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const product: any = await singleProductReq.json(); //IProductRes
	console.log({ URL: url, PRODUCTS: product });
	const c = product.data.store;
	return c;
};
