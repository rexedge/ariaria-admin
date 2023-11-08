import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/lib/icons';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { slugify, unslugify } from '@/lib/utils';

export default function NewProductForm({
	subcategory,
	categories,
}: {
	subcategory?: ISubcategory;
	categories: ICategory[];
}) {
	return (
		<form className='flex flex-col gap-5'>
			{/* <Input
				defaultValue={unslugify(subcategory?.title || '')}
				className='hidden'
			/> */}
			<div className=''>
				<Input placeholder='Name of product' />
			</div>
			<div className=''>
				<Textarea placeholder='Description' />
			</div>
			<div className=''>
				<Input placeholder='Price' />
			</div>
			<div className=''>
				<Select defaultValue={''}>
					<SelectTrigger>
						<SelectValue placeholder='Select Category' />
					</SelectTrigger>
					<SelectContent>
						{categories &&
							categories.map((a, b) => (
								<SelectItem
									key={b}
									value={slugify(a.title)}
								>
									{a.title}
								</SelectItem>
							))}
					</SelectContent>
				</Select>
			</div>
			<div className=''>
				<Select defaultValue={''}>
					<SelectTrigger>
						<SelectValue placeholder='Select Subcategory' />
					</SelectTrigger>
					<SelectContent>
						{categories &&
							categories.map((a, b) => (
								<SelectItem
									key={b}
									value={slugify(a.title)}
								>
									{a.title}
								</SelectItem>
							))}
					</SelectContent>
				</Select>
			</div>
			<div className=''>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Stock option' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='limited'>Limited</SelectItem>
						<SelectItem value='unlimited'>
							Unlimited
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className=''>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Status' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='active'>Active</SelectItem>
						<SelectItem value='inactive'>Inactive</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className=''>
				<Input
					id='tags'
					placeholder='Tags'
				/>
				<Label
					className='text-gray-500 font-light text-xs'
					htmlFor='tags'
				>
					Add keywords for this product.
				</Label>
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
				<Label className='text-gray-500 font-light text-xs'>
					You can upload a maximum of 5 images.
				</Label>
			</div>
			<Button className='w-full'>Create Product</Button>
		</form>
	);
}
