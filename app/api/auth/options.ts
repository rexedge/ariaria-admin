import { BASE_URL, ENDPOINTS } from '@/lib/data';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const headers = {
	'Content-Type': 'application/json',
	'api-public-key': process.env.API_PUBLIC_KEY || '',
	'api-secret-key': process.env.API_SECRET_KEY || '',
};

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const apiRoute = ENDPOINTS.auth.login;
				try {
					const res = await fetch(BASE_URL + apiRoute, {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers,
					});
					const result = await res.json();
					console.log(result);
					if (result.success === false) {
						throw new Error(
							result?.message || 'Something went wrong'
						);
					} else {
						let user = result?.data;
						console.log(user);
						return user;
					}
				} catch (error: any) {
					console.log(error);
					throw new Error(error.message);
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
		// maxAge: 60 * 60 * 24 * 7, // 7 days
		maxAge: 60 * 30, //30 minutes
	},
	pages: {
		signIn: '/sign-in',
		error: '/sign-in',
	},
	jwt: {
		// maxAge: 60 * 60 * 24 * 30,  // 30 days
		maxAge: 60 * 30,
	},
	callbacks: {
		session: ({ session, token }) => {
			session.user.access_token = token.access_token as string;
			return session;
		},
		jwt: ({ token, user }) => {
			if (user) token.access_token = user.access_token;
			return token;
		},
	},
};
