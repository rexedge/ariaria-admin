import NewCategoriesForm from '@/components/forms/add-categories-form';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';
import React from 'react';

export default function AddCategory() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='w-fit h-7'>
					<span className='lg:hidden'>
						<PlusIcon />
					</span>
					<span className='hidden lg:flex'>Add Category</span>
				</Button>
			</DialogTrigger>
			<DialogContent className='w-[90vw] max-w-md p-0'>
				<DialogHeader>
					<DialogTitle className='h-14 flex items-center justify-center border-b'>
						Add A Category
					</DialogTitle>
					<div className='p-5 xl:p-8'>
						<NewCategoriesForm />
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
