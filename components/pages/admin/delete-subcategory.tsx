import NewCategoriesForm from '@/components/forms/add-categories-form';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { TrashIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function DeleteSubcategory({
	subcategory,
}: {
	subcategory?: ISubcategory;
}) {
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
						<Button variant={'destructive'}>
							Delete Subcategory
						</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
