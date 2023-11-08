import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { DownloadIcon } from '@/lib/icons';

export default function NewSubcategoryForm() {
	return (
		<form className='flex flex-col gap-5'>
			<div className=''>
				<Input placeholder='Name of subcategory' />
			</div>
			<div className='h-52 w-full'>
				<Input
					className='hidden'
					type='file'
					accept='images'
					placeholder='Name of subcategory'
				/>
				<Button className='w-full gap-2'>
					<DownloadIcon />
					Upload subcategory picture
				</Button>
			</div>
			<Button className='w-full'>Create Subcategory</Button>
		</form>
	);
}
