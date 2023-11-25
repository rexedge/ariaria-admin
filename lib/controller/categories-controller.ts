import { headers } from '@/app/api/auth/options';
import { BASE_URL, ENDPOINTS } from '../data';

export const getCategories = async () => {
	const url = `${BASE_URL}${ENDPOINTS.categories.all}`;
	const allCategoriesReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const category: ICategoriesRes = await allCategoriesReq.json();
	const c = category.data.store.tbl_store_categories;
	return c;
};

export const getCategoryById = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.categories.all}${id}`;
	const singleCategoryReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const category: ICategoryRes = await singleCategoryReq.json();
	const c = category.data.store;
	console.log(c);
	return c;
};

export const getSubcategoriesByCategoryId = async (id: string) => {
	const url = `${BASE_URL}${ENDPOINTS.categories.all}${id}/subcategories`;
	const allSubcategoriesReq = await fetch(url, {
		headers: headers,
		cache: 'no-store',
	});
	const subcategoryResponse: any = await allSubcategoriesReq.json();
	// const c = category.data.store;
	console.log(subcategoryResponse);
	return subcategoryResponse;
};
