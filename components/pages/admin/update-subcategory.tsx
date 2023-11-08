import UpdateSubcategoriesForm from '@/components/forms/update-subcategories-form ';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { EditIcon } from 'lucide-react';
import React from 'react';

export default function UpdateSubcategory({
	subcategory,
}: {
	subcategory: ISubcategory;
}) {
	return (
		<Dialog>
			<DialogTrigger className='flex px-2 py-1.5 items-center w-full text-sm'>
				<EditIcon className='mr-2 h-4 w-4' />
				<span>Edit</span>
			</DialogTrigger>
			<DialogContent className='w-[90vw] max-w-md'>
				<DialogHeader>
					<DialogTitle className='h-14 flex items-center justify-center border-b'>
						Update Subcategory
					</DialogTitle>
					<DialogDescription className='p-5 xl:p-8'>
						<UpdateSubcategoriesForm
							subcategory={subcategory}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
