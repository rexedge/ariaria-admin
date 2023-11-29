import { addProductFormValue } from '@/src/components/forms/add-products';
// import { updateProductsFormValue } from '@/components/forms/update-products-form ';
import { getSSession } from '@/src/lib/controller/session-controller';
import { BASE_URL, ENDPOINTS } from '@/src/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const session = await getSSession();
	const body: addProductFormValue = await req.json();
	const headers = {
		'Content-Type': 'application/json',
		'api-public-key': process.env.API_PUBLIC_KEY || '',
		'api-secret-key': process.env.API_SECRET_KEY || '',
		Authorization: `Bearer ${session?.user.access_token}`,
	};

	try {
		const url = BASE_URL + ENDPOINTS.products.all;
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		});
		const result = await response.json();
		if (!response.ok) {
			throw new Error(`Something Went wrong ${response.statusText}`);
		} else {
			return NextResponse.json(result);
		}
	} catch (error: any) {
		return error?.message;
	}
}

// export async function PUT(req: NextRequest) {
// 	const session = await getSSession();
// 	const body: updateProductsFormValue = await req.json();
// 	const headers = {
// 		'Content-Type': 'application/json',
// 		'api-public-key': process.env.API_PUBLIC_KEY || '',
// 		'api-secret-key': process.env.API_SECRET_KEY || '',
// 		Authorization: `Bearer ${session?.user.access_token}`,
// 	};

// 	try {
// 		const url = `${BASE_URL}${ENDPOINTS.products.all}/${body.id}`;
// 		console.log({ URL: url, PAYLOAD: body });
// 		const response = await fetch(url, {
// 			method: 'PUT',
// 			headers,
// 			body: JSON.stringify(body),
// 		});
// 		const result = await response.json();
// 		if (!response.ok) {
// 			throw new Error(`Something Went wrong ${response.statusText}`);
// 		} else {
// 			return NextResponse.json(result);
// 		}
// 	} catch (error: any) {
// 		return error?.message;
// 	}
// }
