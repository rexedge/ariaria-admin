import { headers } from '@/src/app/api/auth/options';
import { BASE_URL, ENDPOINTS } from '../data';

export const getStore = async () => {
	const storeId = process.env.STORE_ID || 'STORE_ID';

	const url = `${BASE_URL}${ENDPOINTS.main.store}${storeId}`;
	const res = await fetch(url, { headers: headers, cache: 'no-store' });
	const data: Promise<any> = await res.json();
	if (!res.ok) return undefined;
	const store = (await data).data.store;
	return store;
};
