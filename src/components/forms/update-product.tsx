'use client';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/src/components/ui/select';
import { Textarea } from '@/src/components/ui/textarea';
import { AddIcon } from '@/src/lib/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import MultipleImagesUploader from '../shared/images/image-uploader';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import Tag from '../ui/tag';

const updateProductFormSchema = z.object({
	product_id: z.string(),
	name: z
		.string({ required_error: 'Enter product name' })
		.min(2, { message: 'Product name should be a valid word' }),
	description: z.string({ required_error: 'Enter product description' }),
	price: z.string({ required_error: 'Add Price' }),
	category_id: z.string({ required_error: 'select a category' }),
	subcategory_id: z.string({ required_error: 'select a subcategory' }),
	image: z.array(z.string({ required_error: 'Add at least 1 (one) Image' })),
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

export type updateProductFormValue = z.infer<typeof updateProductFormSchema>;

export default function UpdateProductForm({
	product,
	categories,
	subcategory,
	iSubcategories,
}: {
	product: IStoreProduct;
	categories: ICategory[];
	subcategory: ISubcategory;
	iSubcategories: ISubcategory[];
}) {
	const initialTags = product!.tags!.split(':::');
	const defaultValues: Partial<updateProductFormValue> = {
		product_id: product.product_id,
		name: product.name,
		description: product.description,
		price: product.price.toString(),
		category_id: product.category_id,
		subcategory_id: product.subcategory_id,
		image: [
			'https://isce-image.fra1.cdn.digitaloceanspaces.com/ariaria-products/ariaria-46bd8827-63f6-418e-b293-bdc96509fb77-ariaria-products',
		],
		// image: [`/${product.image}`],
		stock_option: product.stock_option,
		stock_value: product.stock_value?.toString(),
		type: product.type,
		tags: initialTags,
		status: product.status,
	};

	const form = useForm<updateProductFormValue>({
		resolver: zodResolver(updateProductFormSchema),
		defaultValues,
		mode: 'onChange',
	});
	const tags = form.watch('tags', []);
	const stockOption = form.watch('stock_option');
	const [subcategories, setSubcategories] =
		React.useState<ISubcategory[]>(iSubcategories);
	const [selectedCategory, setSelectedCategory] =
		React.useState<ICategory | null>();
	const [selectedSubcategory, setSelectedSubcategory] = React.useState<
		ISubcategory | undefined
	>(subcategory);

	const handleCategoryChange = async (categoryId: string) => {
		const subcategoriesRequest = await fetch(
			`/api/category/fetch-category-by-id?categoryId=${categoryId}`
		);
		const subcategoriesResponse = await subcategoriesRequest.json();
		setSubcategories(subcategoriesResponse);
		form.setValue('category_id', categoryId);
		form.setValue('subcategory_id', '');
	};
	const handleSubcategoryChange = async (subcategoryId: string) => {
		const ssc = subcategories.find(
			(a) => a.store_subcategory_id === subcategoryId
		);
		ssc ? setSelectedSubcategory(ssc) : setSelectedSubcategory(undefined);
		form.setValue('subcategory_id', '');
	};
	const handleStockOptionChange = async (categoryId: string) => {};
	const handleFiles = (newImages: string[]) => {
		// const urlArray: string[] = newImages.map((image) => image.url);
		form.setValue('image', newImages);
		console.log(newImages);
	};

	const handleTagRemove = (index: number) => {
		const currentTags = form.watch('tags', []);
		const updatedTags = [
			...currentTags.slice(0, index),
			...currentTags.slice(index + 1),
		];
		form.setValue('tags', updatedTags);
	};

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const router = useRouter();

	console.log({
		SUBCATEGORIES_ALL: subcategories,
		SINGLE_SUBCATEGORY: selectedSubcategory,
		PRODUCT: product,
	});

	async function onSubmit(data: updateProductFormValue) {
		setIsLoading(true);
		try {
			console.log(data.tags);
			const updateProductResponse = await fetch(
				'/api/product/create',
				{
					method: 'PUT',
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
						images: data.image,
						product_id: data.product_id,
					}),
				}
			);
			const productResponse = await updateProductResponse.json();
			if (
				productResponse.status > 199 &&
				productResponse.status < 299
			) {
				toast.success('Product updated successfully');
				setIsLoading(false);
				router.refresh();
				return NextResponse.json(productResponse);
			} else {
				setIsLoading(false);
				toast.error(
					`Failed to update product because: ${productResponse.message}`
				);
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
									onValueChange={
										handleSubcategoryChange
									}
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
										<FormLabel className=''>
											Tags
										</FormLabel>
										<div className='flex items-center justify-start gap-2 flex-wrap pt-3'>
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
					<FormField
						control={form.control}
						name='image'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className=''>
										<MultipleImagesUploader
											handleFiles={handleFiles}
											folder='ariaria-products'
											initialImages={
												field.value
											}
										/>
									</div>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>

					<Button
						disabled={isLoading}
						className='w-full'
					>
						Update Product
					</Button>
				</form>
			</Form>
			{selectedSubcategory && (
				<div className='w-full aspect-[5/6] rounded-lg shadow relative overflow-clip'>
					<div className='text-primary text-xs lg:text-sm absolute flex items-center justify-center p-1 px-2 h-8 w-fit top-0 left-0 bg-white rounded-br-xl shadow hover:shadow-lg transition-all duration-500'>
						{selectedSubcategory?.title}
					</div>
					<Image
						src={selectedSubcategory?.image}
						alt=''
						height={200}
						width={1200}
						className='h-full w-full object-cover object-center rounded-lg'
					/>
				</div>
			)}
		</>
	);
}
