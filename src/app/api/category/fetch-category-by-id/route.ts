import { getSSession } from '@/src/lib/controller/session-controller';
import { BASE_URL, ENDPOINTS } from '@/src/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
	const session = await getSSession();
	const accessToken = session?.user.access_token;
	const categoryId = req.nextUrl.searchParams.get('categoryId');
	const headers = {
		'Content-Type': 'application/json',
		'api-public-key': process.env.API_PUBLIC_KEY || '',
		'api-secret-key': process.env.API_SECRET_KEY || '',
		Authorization: `Bearer ${accessToken}`,
	};
	try {
		const url = `${BASE_URL}${ENDPOINTS.categories.all}/${categoryId}/subcategories`;
		const response = await fetch(url, {
			method: 'GET',
			headers,
			cache: 'no-store',
		});

		if (response.status !== 200) {
			// console.log(NextResponse.json(response));
			throw new Error('Something Went wrong');
		} else {
			const subcategoriesResponse: ISubcategoriesRes =
				await response.json();
			const subcategories =
				subcategoriesResponse.data.category.tbl_store_subcategories;
			return NextResponse.json(subcategories);
		}
	} catch (error: any) {
		return error?.message;
	}
}
