'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
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
import Tag from '../ui/tag';
import { AddIcon } from '@/lib/icons';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import { NextResponse } from 'next/server';

// import { getSubcategoriesByCategoryId } from '@/lib/controller/categories-controller';

const addProductFormSchema = z.object({
	name: z
		.string({ required_error: 'Enter product name' })
		.min(2, { message: 'Category should be a valid word' }),
	description: z.string({ required_error: 'Enter product description' }),
	price: z.string({ required_error: 'Add Price' }),
	category_id: z.string({ required_error: 'select a category' }),
	subcategory_id: z.string({ required_error: 'select a subcategory' }),
	// images: z.string({ required_error: 'Add at least 1 (one) Image' }),
	stock_option: z
		.string({ required_error: 'Select stock option' })
		.refine((value) => ['limited', 'unlimited'].includes(value), {
			message: 'Invalid Stock Option',
		}),
	stock_value: z.string({ required_error: 'Enter stock value' }),
	type: z
		.string({ required_error: 'select type' })
		.refine((value) => ['virtual', 'physical'].includes(value), {
			message: 'Invalid Status',
		}),
	tags: z.array(
		z.string().min(2, {
			message: 'Each tag must be at least 2 characters long',
		})
	),
	status: z
		.string({ required_error: 'select status' })
		.refine(
			(value) => ['draft', 'sold-out', 'available'].includes(value),
			{
				message: 'Invalid Status',
			}
		),
});
export type addProductFormValue = z.infer<typeof addProductFormSchema>;

export default function NewProductForm({
	categories,
}: {
	categories: ICategory[];
}) {
	const defaultValues: Partial<addProductFormValue> = {
		status: 'available',
		type: 'physical',
		stock_option: 'limited',
		tags: [],
	};
	const form = useForm<addProductFormValue>({
		resolver: zodResolver(addProductFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	const tags = form.watch('tags', []);
	const stockOption = form.watch('stock_option');
	const [subcategories, setSubcategories] = React.useState<ISubcategory[]>(
		[]
	);
	const [selectedCategory, setSelectedCategory] =
		React.useState<ICategory | null>(null);
	const [selectedSubcategory, setSelectedSubcategory] =
		React.useState<string>('');

	const handleCategoryChange = async (categoryId: string) => {
		const subcategoriesRequest = await fetch(
			`/api/category/fetch-category-by-id?categoryId=${categoryId}`
		);
		const subcategoriesResponse = await subcategoriesRequest.json();
		setSubcategories(subcategoriesResponse);
		form.setValue('category_id', categoryId);
		form.setValue('subcategory_id', '');
	};
	const handleStockOptionChange = async (categoryId: string) => {};

	const handleTagRemove = (index: number) => {
		const currentTags = form.watch('tags', []);
		const updatedTags = [
			...currentTags.slice(0, index),
			...currentTags.slice(index + 1),
		];
		form.setValue('tags', updatedTags);
	};

	// React.useEffect(() => {
	// 	// Fetch your subcategories data based on the selected category
	// 	const fetchSubcategories = async () => {
	// 		try {
	// 			if (selectedCategory) {
	// 				// Replace the following line with your actual API call to get subcategories
	// 				const subcategoriesResponse =
	// 					await getSubcategoriesByCategoryId(
	// 						selectedCategory.store_category_id
	// 						// form.getValues('category_id')
	// 					);
	// 				setSubcategories(subcategoriesResponse);
	// 			} else {
	// 				setSubcategories([]); // If no category is selected, clear subcategories
	// 			}
	// 		} catch (error) {
	// 			console.error('Error fetching subcategories:', error);
	// 		}
	// 	};

	// 	fetchSubcategories();
	// }, [selectedCategory]);
	// }, [form.getValues('category_id')]);

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const router = useRouter();

	// const handleprofileImage = async (file: { name: string; url: string }) => {
	// 	form.setValue('images', file.url);
	// };
	async function onSubmit(data: addProductFormValue) {
		setIsLoading(true);
		try {
			console.log(data);
			const createProductResponse = await fetch(
				'/api/product/create',
				{
					method: 'POST',
					body: JSON.stringify({
						name: data.name,
						type: data.type,
						description: data.description,
						price: data.price,
						category_id: data.category_id,
						subcategory_id: data.subcategory_id,
						stock_option: data.stock_option,
						status: data.status,
						stock_value: data.stock_value,
						tags: data.tags,
					}),
				}
			);
			const productResponse = await createProductResponse.json();
			if (
				createProductResponse.status > 199 &&
				createProductResponse.status < 299
			) {
				toast.success('Product created successfully');
				setIsLoading(false);
				form.reset();
				router.refresh();
				return NextResponse.json(productResponse);
			} else {
				setIsLoading(false);
				toast.error('Failed to create product');
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
		<>
			<Form {...form}>
				<form
					className='flex flex-col gap-5'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Name of product'
										{...field}
										className=''
									/>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										{...field}
										placeholder='Description'
									/>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder='Price'
									/>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='category_id'
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={
										handleCategoryChange
									}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select Category' />
									</SelectTrigger>
									<SelectContent>
										{categories &&
											categories.map(
												(a, b) => (
													<SelectItem
														key={b}
														value={
															a.store_category_id
														}
													>
														{a.title}
													</SelectItem>
												)
											)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='subcategory_id'
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select Subcategory' />
									</SelectTrigger>
									<SelectContent>
										{!subcategories && (
											<SelectItem
												value='-'
												disabled
											>
												No subcategory
											</SelectItem>
										)}
										{subcategories.length > 0 ? (
											subcategories.map(
												(a, b) => (
													<SelectItem
														key={b}
														value={
															a.store_subcategory_id
														}
													>
														{a.title}
													</SelectItem>
												)
											)
										) : (
											<SelectItem
												value='-'
												disabled
											>
												No subcategory
											</SelectItem>
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='stock_option'
						render={({ field }) => (
							<FormItem>
								<Select
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger>
										<SelectValue placeholder='Stock option' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='limited'>
											Limited
										</SelectItem>
										<SelectItem value='unlimited'>
											Unlimited
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{stockOption === 'limited' && (
						<FormField
							control={form.control}
							name='stock_value'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Stock Value'
											{...field}
											className=''
										/>
									</FormControl>
									<FormMessage className='text-left' />
								</FormItem>
							)}
						/>
					)}
					<FormField
						control={form.control}
						name='type'
						render={({ field }) => (
							<FormItem>
								<Select
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger>
										<SelectValue placeholder='Product Type' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='virtual'>
											Virtual
										</SelectItem>
										<SelectItem value='physical'>
											Physical
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='status'
						render={({ field }) => (
							<FormItem>
								<Select
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger>
										<SelectValue placeholder='Status' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='draft'>
											Draft
										</SelectItem>
										<SelectItem value='sold-out'>
											Sold Out
										</SelectItem>
										<SelectItem value='available'>
											Available
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='tags'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className=''>
										<div className='flex items-center justify-start gap-2 flex-wrap'>
											{tags.map(
												(tag, index) => (
													<Tag
														key={
															index
														}
														onClose={() =>
															handleTagRemove(
																index
															)
														}
													>
														{tag}
													</Tag>
												)
											)}
											<Dialog>
												<DialogTrigger>
													<AddIcon />
												</DialogTrigger>
												<DialogContent className='w-[90vw] max-w-md p-0'>
													<DialogHeader>
														<DialogTitle className='h-14 flex items-center justify-center border-b'>
															Add A
															Category
														</DialogTitle>
														<div className='p-5 xl:p-8'>
															<Input
																id='tags'
																placeholder='Tags'
																onKeyDown={(
																	e
																) => {
																	if (
																		e.key ===
																			'Enter' &&
																		e.currentTarget.value.trim() !==
																			''
																	) {
																		e.preventDefault();
																		form.setValue(
																			'tags',
																			[
																				...tags,
																				e.currentTarget.value.trim(),
																			]
																		);
																		e.currentTarget.value =
																			'';
																	}
																}}
															/>
														</div>
													</DialogHeader>
												</DialogContent>
											</Dialog>
										</div>
										<Label
											className='text-gray-500 font-light text-xs'
											htmlFor='tags'
										>
											Add keywords for this
											product.
										</Label>
									</div>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>
					{/* <div className='h-52 w-full'>
						<Input
							className='hidden'
							type='file'
							accept='images'
							placeholder='Name of subcategory'
						/>
						<Button
							className='w-full gap-2'
							type='button'
						>
							<DownloadIcon />
							Upload subcategory picture
						</Button>
						<Label className='text-gray-500 font-light text-xs'>
							You can upload a maximum of 5 images.
						</Label>
					</div> */}

					<Button
						disabled={isLoading}
						className='w-full'
					>
						Create Product
					</Button>
				</form>
			</Form>
			{/* {subcategory && (
				<div className='w-full aspect-[5/6] rounded-lg shadow relative overflow-clip'>
					<div className='text-primary text-xs lg:text-sm absolute flex items-center justify-center p-1 px-2 h-8 w-fit top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
						{subcategory?.title}
					</div>
					<Image
						src={subcategory?.image}
						alt=''
						height={200}
						width={1200}
						className='h-full w-full object-cover object-center rounded-lg'
					/>
				</div>
			)} */}
		</>
	);
}
