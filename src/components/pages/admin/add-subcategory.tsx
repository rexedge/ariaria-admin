import NewSubcategoryForm from '@/src/components/forms/add-subcategories-form';
import { Button } from '@/src/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/src/components/ui/dialog';
import { PlusIcon } from 'lucide-react';
import React from 'react';

export default function AddSubcategory({ categoryId }: { categoryId: string }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='w-8 h-8 lg:h-8 lg:w-40 font-libre'>
					<span className='lg:hidden'>
						<PlusIcon />
					</span>
					<span className='hidden lg:flex whitespace-nowrap '>
						Add Subcategory
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className='w-[90vw] max-w-md'>
				<DialogHeader>
					<DialogTitle className='h-14 flex items-center justify-center border-b'>
						Add A Subcategory
					</DialogTitle>
					<DialogDescription className='p-5 xl:p-8'>
						<NewSubcategoryForm categoryId={categoryId} />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
