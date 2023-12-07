import { headers } from '@/src/app/api/auth/options';
import { BASE_URL, ENDPOINTS } from '../data';

export const getProducts = async () => {
	const url = `${BASE_URL}${ENDPOINTS.products.all}?filter=images`;
	const allProductsReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const product: IProductsRes = await allProductsReq.json();
	const c = product.data.store.tbl_products;
	return c;
};

export const getProductById = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.products.all}/${id}?filter=images`;
	const singleProductReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const product: IProductRes = await singleProductReq.json(); //IProductRes
	const c = product.data.product;
	console.log(c);
	return c;
};
