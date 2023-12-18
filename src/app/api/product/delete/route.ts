import { addCategoriesFormValue } from '@/src/components/forms/add-categories-form';
import { updateCategoriesFormValue } from '@/src/components/forms/update-categories-form ';
import { updateProductFormValue } from '@/src/components/forms/update-product';
import { getSSession } from '@/src/lib/controller/session-controller';
import { BASE_URL, ENDPOINTS } from '@/src/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
	const session = await getSSession();
	const body: updateProductFormValue = await req.json();
	const headers = {
		'Content-Type': 'application/json',
		'api-public-key': process.env.API_PUBLIC_KEY || '',
		'api-secret-key': process.env.API_SECRET_KEY || '',
		Authorization: `Bearer ${session?.user.access_token}`,
	};

	try {
		const url = `${BASE_URL}${ENDPOINTS.products.all}/${body.product_id}`;
		const response = await fetch(url, {
			method: 'PUT',
			headers,
			body: JSON.stringify({ deleted: body.deleted }),
		});
		const result = await response.json();
		console.log({
			URL: url,
			PAYLOAD: body,
			HEADERS: headers,
			RESULT: result,
		});
		if (!response.ok) {
			throw new Error(`Something Went wrong ${response.statusText}`);
		} else {
			return NextResponse.json(result);
		}
	} catch (error: any) {
		return error?.message;
	}
}
