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

export default function DeleteCategory({ category }: { category?: ICategory }) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const handleCategoryDelete = async () => {
		try {
			setIsLoading(true);
			toast.promise(
				async () => {
					const deleteCategoryRequest = await fetch(
						'/api/category/delete',
						{
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								store_category_id:
									category?.store_category_id,
								deleted: true,
							}),
						}
					);
					const deleteCategoryResponse =
						await deleteCategoryRequest.json();
					console.log({ CLIENT: deleteCategoryResponse });
					if (!deleteCategoryResponse.success) {
						setIsLoading(false);
						throw new Error(deleteCategoryResponse.message);
					}
					router.refresh();
					setIsLoading(false);
					return deleteCategoryResponse;
				},
				{
					loading: 'Deleting category...',
					success: 'Category deleted!',
					error: 'Error deleting category',
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
						Delete Category
					</DialogTitle>
					<DialogDescription className='p-5 xl:p-8 flex flex-col gap-5 xl:gap-8'>
						<div className=''>
							<div className='h-52 w-full overflow-clip rounded-2xl mb-2'>
								<Image
									src={
										category?.image || '/nike.png'
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
									{category?.title || 'Fashion'}
									&quot;
								</span>{' '}
								category?
							</p>
						</div>
						<DialogClose asChild>
							<Button
								onClick={handleCategoryDelete}
								variant={'destructive'}
								disabled={isLoading}
							>
								Delete Category
							</Button>
						</DialogClose>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
