import { BASE_URL, ENDPOINTS } from '../data';
import { getSSession } from './session-controller';

export const getCustomers = async () => {
	const session = await getSSession();
	const headersWithAuth = {
		'Content-Type': 'application/json',
		'api-public-key': process.env.API_PUBLIC_KEY || '',
		'api-secret-key': process.env.API_SECRET_KEY || '',
		Authorization: `Bearer ${session?.user.access_token}`,
	};
	console.log(headersWithAuth);
	const url = `${BASE_URL}${ENDPOINTS.customers.all}`;
	const allCustomersReq = await fetch(url, {
		headers: headersWithAuth,
		cache: 'no-store',
	});
	// const product: IProductsRes = await allCustomersReq.json();
	const customers: any = await allCustomersReq.json();
	// const c = product.data.store.tbl_products;
	return customers;
};

export const getProductById = async (id: string) => {
	const session = await getSSession();
	const headersWithAuth = {
		'Content-Type': 'application/json',
		'api-public-key': process.env.API_PUBLIC_KEY || '',
		'api-secret-key': process.env.API_SECRET_KEY || '',
		Authorization: `Bearer ${session?.user.access_token}`,
	};
	const url = `${BASE_URL}${ENDPOINTS.products.all}/${id}`;
	const singleProductReq = await fetch(url, {
		headers: headersWithAuth,
		cache: 'no-store',
	});
	const product: any = await singleProductReq.json(); //IProductRes
	console.log({ URL: url, PRODUCTS: product });
	const c = product.data.store;
	return c;
};
