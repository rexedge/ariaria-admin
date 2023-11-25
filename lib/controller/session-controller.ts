import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/options';

export const getSSession = async () => {
	const session = await getServerSession(options);
	return session;
};
