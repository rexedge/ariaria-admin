import { Mulish, Libre_Baskerville } from 'next/font/google';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import { Metadata } from 'next';
import NavBar from '@/components/layout/navbar';
import SideBarItemList from '@/components/layout/side-bar-item-list';
export const metadata: Metadata = {
	title: 'Ariaria',
	description: 'The Ariaria Marketplace',
	// viewport: {
	// 	width: 'device-width',
	// 	initialScale: 1,
	// 	maximumScale: 1,
	// },
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<NavBar />
			<div className='w-full h-full flex gap-5 p-2'>
				<SideBarItemList />
				<div className='bg-gray-100 rounded-3xl w-full mb-3 ml-0 lg:ml-52 mt-24 p-5 2xl:p-10'>
					{children}
				</div>
			</div>
			<Toaster
				richColors
				position='top-right'
			/>
		</main>
	);
}
