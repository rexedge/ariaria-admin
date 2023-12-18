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
import { useState } from 'react';
import { toast } from 'sonner';

export default function DeleteSubcategory({
	subcategory,
}: {
	subcategory?: ISubcategory;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const handleSubcategoryDelete = async () => {
		try {
			setIsLoading(true);
			toast.promise(
				async () => {
					const deleteSubcategoryRequest = await fetch(
						'/api/subcategory/delete',
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								store_subcategory_id:
									subcategory?.store_subcategory_id,
								deleted: true,
							}),
						}
					);
					const deleteSubcategoryResponse =
						await deleteSubcategoryRequest.json();
					console.log({ CLIENT: deleteSubcategoryResponse });
					if (!deleteSubcategoryResponse.success) {
						setIsLoading(false);
						throw new Error(
							deleteSubcategoryResponse.message
						);
					}
					router.refresh();
					router.push(`/categories/${subcategory?.category_id}`);
					setIsLoading(false);
					return deleteSubcategoryResponse;
				},
				{
					loading: 'Deleting subcategory...',
					success: 'Subcategory deleted!',
					error: 'Error deleting subcategory',
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
						Delete Subcategory
					</DialogTitle>
					<DialogDescription className='p-5 xl:p-8 flex flex-col gap-5 xl:gap-8'>
						<div className=''>
							<div className='h-52 w-full overflow-clip rounded-2xl mb-2'>
								<Image
									src={
										subcategory?.image ||
										'/nike.png'
									}
									alt=''
									quality={100}
									height={300}
									width={300}
									className='h-full w-full object-cover'
								/>
							</div>
							<p className='text-center text-sm'>
								Do you really want to delete{' '}
								<span className='font-bold'>
									&quot;
									{subcategory?.title || 'Fashion'}
									&quot;
								</span>{' '}
								subcategory?
							</p>
						</div>
						<DialogClose asChild>
							<Button
								onClick={handleSubcategoryDelete}
								disabled={isLoading}
								variant={'destructive'}
							>
								Delete Subcategory
							</Button>
						</DialogClose>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
