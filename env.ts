declare namespace NodeJS {
	export interface ProcessEnv {
		STORE_ID?: string;
		STORE_NAME?: string;
		STORE_LINK?: string;
		API_PUBLIC_KEY?: string;
		API_SECRET_KEY?: string;
		AUTH_SECRET?: string;
		NEXTAUTH_SECRET?: string;
		API_SECRET?: string;
	}
}
