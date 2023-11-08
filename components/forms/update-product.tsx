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
import { unslugify } from '@/lib/utils';

export default function UpdateProductForm({
	product,
}: {
	product: IStoreProduct;
}) {
	return (
		<form className='flex flex-col gap-5'>
			<Input
				defaultValue={unslugify(product.name)}
				className='hidden'
			/>
			<div className=''>
				<Input
					placeholder='Name of product'
					defaultValue={product.name}
				/>
			</div>
			<div className=''>
				<Textarea
					placeholder='Description'
					defaultValue={product.description}
				/>
			</div>
			<div className=''>
				<Input
					placeholder='Price'
					defaultValue={product.price}
				/>
			</div>
			<div className=''>
				<Select defaultValue={product?.stockOption || 'limited'}>
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
				<Select defaultValue={product.status || 'active'}>
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
