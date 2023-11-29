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

const addSubcategoriesFormSchema = z.object({
	title: z
		.string({ required_error: 'Enter an title' })
		.min(2, { message: 'Subcategory should be a valid word' }),
	description: z.string(),
	image: z.string({ required_error: 'select an image' }),
	category_id: z.string({ required_error: 'Choose a category' }),
});
export type addSubcategoriesFormValue = z.infer<
	typeof addSubcategoriesFormSchema
>;

export default function NewSubcategoryForm({
	categoryId,
}: {
	categoryId: string;
}) {
	const defaultValues: Partial<addSubcategoriesFormValue> = {
		category_id: categoryId,
		title: '',
		description: 'Subcategory',
	};

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const router = useRouter();

	const form = useForm<addSubcategoriesFormValue>({
		resolver: zodResolver(addSubcategoriesFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	const handleprofileImage = async (file: { name: string; url: string }) => {
		form.setValue('image', file.url);
	};
	async function onSubmit(data: addSubcategoriesFormValue) {
		setIsLoading(true);
		try {
			console.log(data);
			const createSubcategoryResponse = await fetch(
				'/api/subcategory/create',
				{
					method: 'POST',
					body: JSON.stringify({
						category_id: data.category_id,
						description: data.description,
						title: data.title,
						image: data.image,
					}),
				}
			);
			const subcategoryResponse =
				await createSubcategoryResponse.json();
			if (
				createSubcategoryResponse.status > 199 &&
				createSubcategoryResponse.status < 299
			) {
				toast.success('Subcategory created successfully');
				setIsLoading(false);
				form.reset();
				router.refresh();
				return NextResponse.json(subcategoryResponse);
			} else {
				setIsLoading(false);
				toast.error('Failed to create subcategory');
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
