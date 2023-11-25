import type { Metadata } from 'next';
import { Inter, Libre_Baskerville, Mulish } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import Provider from '@/lib/session-provider';
import { Toaster } from 'sonner';

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const libre = Libre_Baskerville({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-libre',
});

export const metadata: Metadata = {
	title: 'Ariaria Admin',
	description: 'Admin',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Provider>
				<body
					className={`${mulish.variable} ${libre.variable} w-screen overflow-x-clip`}
				>
					<NextTopLoader
						color='#F97316'
						shadow='0 0 10px #F97316,0 0 5px #F97316'
						showAtBottom={false}
					/>
					{children}
					<Toaster richColors />
				</body>
			</Provider>
		</html>
	);
}
