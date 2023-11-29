// import { usePathname } from 'next/navigation';
import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import Container from '../layout/container';

export default function ProductOverlay({ product }: { product: IProduct }) {
	return (
		<Dialog open={true}>
			<Container>
				<DialogContent className='grid h-[80svh] w-[90svw] place-items-center'>
					{JSON.stringify(product)}
				</DialogContent>
			</Container>
		</Dialog>
	);
}
