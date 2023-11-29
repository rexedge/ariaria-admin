'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { Textarea } from '../ui/textarea';

const footerFormSchema = z.object({
	email: z
		.string({
			required_error: 'Please enter an email.',
		})
		.email(),
	message: z.string(),
});
type FooterFormValues = z.infer<typeof footerFormSchema>;

const defaultValues: Partial<FooterFormValues> = {
	email: '',
	message: '',
};

export default function FooterForm() {
	const form = useForm<FooterFormValues>({
		resolver: zodResolver(footerFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	async function onSubmit() {}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mb-5 flex flex-col gap-5'
			>
				<h1 className='mb-1 font-semibold text-2xl font-libre'>
					Send Enquiry
				</h1>
				<div className='grid gap-5'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Email Address'
										{...field}
										className='bg-gray-200 '
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										placeholder='How can we help?'
										{...field}
										className='bg-gray-200 h-32'
									></Textarea>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='grid'>
					<Button type='submit'>Send Enquiry</Button>
				</div>
			</form>
		</Form>
	);
}
