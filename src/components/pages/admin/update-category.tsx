import UpdateCategoriesForm from '@/src/components/forms/update-categories-form ';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/src/components/ui/dialog';
import { EditIcon } from 'lucide-react';
import React from 'react';

export default function UpdateCategory({ category }: { category: ICategory }) {
	return (
		<Dialog>
			<DialogTrigger className='flex px-2 py-1.5 items-center w-full text-sm'>
				<EditIcon className='mr-2 h-4 w-4' />
				<span>Edit</span>
			</DialogTrigger>
			<DialogContent className='w-[90vw] max-w-md'>
				<DialogHeader>
					<DialogTitle className='h-14 flex items-center justify-center border-b'>
						Update Category
					</DialogTitle>
					<div className='p-5 xl:p-8'>
						<UpdateCategoriesForm category={category} />
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
