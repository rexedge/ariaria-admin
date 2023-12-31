'use client';
import { Button } from '@/src/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/src/components/ui/dialog';
import { TrashIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function DeleteProduct({
	product,
}: {
	product?: IStoreProduct;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const handleProductDelete = async () => {
		try {
			setIsLoading(true);
			toast.promise(
				async () => {
					const deleteProductRequest = await fetch(
						'/api/product/delete',
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								product_id: product?.product_id,
								deleted: true,
							}),
						}
					);
					const deleteProductResponse =
						await deleteProductRequest.json();
					console.log({ CLIENT: deleteProductResponse });
					if (!deleteProductResponse.success) {
						setIsLoading(false);
						throw new Error(deleteProductResponse.message);
					}
					router.refresh();
					router.push('/products');
					setIsLoading(false);
					return deleteProductResponse;
				},
				{
					loading: 'Deleting product...',
					success: 'Product deleted!',
					error: 'Error deleting product',
				}
			);
		} catch (error) {}
	};

	return (
		<Dialog>
			<DialogTrigger className='flex px-2 py-1.5 items-center w-full text-sm text-destructive'>
				<TrashIcon className='mr-2 h-4 w-4' />
				<span>Delete</span>
			</DialogTrigger>
			<DialogContent className='w-[90vw] max-w-md'>
				<DialogHeader>
					<DialogTitle className='h-14 flex items-center justify-center border-b'>
						Delete Product
					</DialogTitle>
					<DialogDescription className='p-5 xl:p-8 flex flex-col gap-5 xl:gap-8'>
						<div className=''>
							<div className='h-52 w-full overflow-clip rounded-2xl mb-2'>
								<Image
									src={
										product?.tbl_product_media &&
										product?.tbl_product_media
											.length > 0
											? product
													?.tbl_product_media[0]
													.media
											: '/nike.png'
									}
									alt=''
									quality={100}
									height={300}
									width={300}
									className='h-full w-full object-cover'
								/>
							</div>
							<p className='text-center text-xs'>
								Do you really want to delete{' '}
								<span className='font-bold'>
									&quot;
									{product?.name}
									&quot;
								</span>{' '}
								product?
							</p>
						</div>
						<DialogClose asChild>
							<Button
								onClick={handleProductDelete}
								disabled={isLoading}
								variant={'destructive'}
							>
								Delete Product
							</Button>
						</DialogClose>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
