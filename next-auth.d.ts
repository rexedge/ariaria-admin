import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
	interface Session {
		user: {
			access_token: string;
			email: string;
			// role: string;
		} & DefaultSession;
	}
	interface User extends DefaultUser {
		token_type: string;
		email: string;
		expires_in: string;
		access_token: string;
		// role: string;
	}
}
declare module 'next-auth' {
	interface JWT extends DefaultJWT {
		access_token: string;
		email: string;
	}
}
