'use client';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FileUploader from '../shared/images/file-uploader';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { NextResponse } from 'next/server';

const updateSubcategoriesFormSchema = z.object({
	store_subcategory_id: z.string(),
	title: z
		.string({ required_error: 'Enter an title' })
		.min(2, { message: 'Subcategory should be a valid word' }),
	description: z.string(),
	image: z.string({ required_error: 'select an image' }),
});
export type updateSubcategoriesFormValue = z.infer<
	typeof updateSubcategoriesFormSchema
>;

export default function UpdateSubcategoriesForm({
	subcategory,
}: {
	subcategory?: ISubcategory;
}) {
	const defaultValues: Partial<updateSubcategoriesFormValue> = {
		title: subcategory?.title,
		description: subcategory?.description,
		image: subcategory?.image,
		store_subcategory_id: subcategory?.store_subcategory_id,
	};

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const { setValue } = useForm();
	const router = useRouter();

	const form = useForm<updateSubcategoriesFormValue>({
		resolver: zodResolver(updateSubcategoriesFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	const handleprofileImage = async (file: { name: string; url: string }) => {
		console.log({
			HANDLE_IMAGE: '',
			IMAGE_URL: file.url,
			iMAGE_NAME: file.name,
		});
		form.setValue('image', file.url);
	};
	async function onSubmit(data: updateSubcategoriesFormValue) {
		setIsLoading(true);
		try {
			console.log(data);
			const updateSubcategoryResponse = await fetch(
				'/api/subcategory/create',
				{
					method: 'PUT',
					body: JSON.stringify({
						description: data.description,
						title: data.title,
						image: data.image,
						store_subcategory_id: data.store_subcategory_id,
					}),
				}
			);
			const subcategoryResponse =
				await updateSubcategoryResponse.json();
			if (
				updateSubcategoryResponse.status > 199 &&
				updateSubcategoryResponse.status < 299
			) {
				toast.success('Subcategory updated successfully');
				setIsLoading(false);
				router.refresh();
				return NextResponse.json(subcategoryResponse);
			} else {
				setIsLoading(false);
				toast.error('Failed to update subcategory');
				return null;
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error?.message || 'Check Internet');
			setIsLoading(false);
			throw new Error(error);
		}
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-5'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Name of subcategory'
									{...field}
									className='bg-gray-200 '
								/>
							</FormControl>
							<FormMessage className='text-left' />
						</FormItem>
					)}
				/>
				<div className='h-52 w-full overflow-clip rounded'>
					<FileUploader
						handleFile={handleprofileImage}
						folder='ariaria'
						type='landscape'
						text='Upload Subcategory Picture'
						image={form.getValues('image')}
					/>
				</div>
				<FormField
					control={form.control}
					name='image'
					render={({ field }) => (
						<FormItem>
							<FormMessage className='text-left' />
						</FormItem>
					)}
				/>
				<Button
					disabled={isLoading}
					className='w-full'
				>
					Create Subcategory
				</Button>
			</form>
		</Form>
	);
}
