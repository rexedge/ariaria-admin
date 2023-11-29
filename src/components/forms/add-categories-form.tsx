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

const addCategoriesFormSchema = z.object({
	title: z
		.string({ required_error: 'Enter an title' })
		.min(2, { message: 'Category should be a valid word' }),
	description: z.string(),
	image: z.string({ required_error: 'select an image' }),
});
export type addCategoriesFormValue = z.infer<typeof addCategoriesFormSchema>;

const defaultValues: Partial<addCategoriesFormValue> = {
	title: '',
	description: 'Category',
};

export default function NewCategoriesForm() {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const router = useRouter();

	const form = useForm<addCategoriesFormValue>({
		resolver: zodResolver(addCategoriesFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	const handleprofileImage = async (file: { name: string; url: string }) => {
		form.setValue('image', file.url);
	};
	async function onSubmit(data: addCategoriesFormValue) {
		setIsLoading(true);
		try {
			console.log(data);
			const createCategoryResponse = await fetch(
				'/api/category/create',
				{
					method: 'POST',
					body: JSON.stringify({
						description: data.description,
						title: data.title,
						image: data.image,
					}),
				}
			);
			const categoryResponse = await createCategoryResponse.json();
			if (
				createCategoryResponse.status > 199 &&
				createCategoryResponse.status < 299
			) {
				toast.success('Category created successfully');
				setIsLoading(false);
				form.reset();
				router.refresh();
				return NextResponse.json(categoryResponse);
			} else {
				setIsLoading(false);
				toast.error('Failed to create category');
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
									placeholder='Name of category'
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
						text='Upload Category Picture'
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
					Create Category
				</Button>
			</form>
		</Form>
	);
}
