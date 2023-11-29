import { getServerSession } from 'next-auth';
import { options } from '@/src/app/api/auth/options';

export const getSSession = async () => {
	const session = await getServerSession(options);
	return session;
};
