import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
	matcher: [
		'/',
		'/categories/:path*',
		'/customers/:path*',
		'/orders/:path*',
		'/products/:path*',
		'/settings/:path*',
		'/statistics/:path*',
	],
};
export default withAuth(
	function middleware(request) {
		const response = NextResponse.next();
		response.cookies.set(
			'accessToken',
			request.nextauth.token?.access_token as string
		);
		response.cookies.set('role', request.nextauth.token?.role as string);
	},
	{
		callbacks: { authorized: ({ token }) => !!token },
	}
);
