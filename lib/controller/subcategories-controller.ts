import { headers } from '@/app/api/auth/options';
import { BASE_URL, ENDPOINTS } from '../data';

export const getSubcategories = async () => {
	const url = `${BASE_URL}${ENDPOINTS.subcategories.all}`;
	const allSubcategoriesReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const subcategory: ISubcategoriesOriginalRes =
		await allSubcategoriesReq.json(); // ISubcategoriesRes
	const c = subcategory.data.subcategory;
	return c;
};

export const getSubcategoryById = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.subcategories.all}/${id}`;
	const singleSubcategoryReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const subcategory: ISubcategoryRes = await singleSubcategoryReq.json(); // ISubcategoryRes
	const c = subcategory.data.subcategory;
	return c;
};

export const getProductsBySubcategoryId = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.subcategories.all}/${id}/products`;
	const allProductsReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const productsResponse: IProductsResBySubcategory =
		await allProductsReq.json();
	const c = productsResponse.data.subcategory.tbl_products;
	return c;
};
