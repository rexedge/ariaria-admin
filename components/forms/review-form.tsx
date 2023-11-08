'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '../ui/textarea';
import { NewReviewStars } from '../shared/new-review-stars';
import { useRouter } from 'next/navigation';

const reviewFormSchema = z.object({
	review: z
		.string({ required_error: 'Please write a review' })
		.min(10, { message: 'Review must be longer than 10 characters' }),
});
type ReviewFormValues = z.infer<typeof reviewFormSchema>;

const defaultValues: Partial<ReviewFormValues> = {
	review: '',
};

export default function ReviewForm() {
	const router = useRouter();
	const [rating, setRating] = React.useState<number>(0);
	const [starError, setStarError] = React.useState<string | null>(null);

	const form = useForm<ReviewFormValues>({
		resolver: zodResolver(reviewFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	async function onSubmit() {
		if (rating < 1) {
			setStarError('choose a rating');
		} else {
			setStarError(null);
			console.log(rating);
			console.log(form.getValues('review'));
			router.refresh();
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mb-5 flex flex-col gap-5'
			>
				<div className='grid gap-5'>
					<div className='grid'>
						<NewReviewStars setRating={setRating} />
						{starError && (
							<div className='text-sm font-medium text-destructive mx-auto'>
								{starError}
							</div>
						)}
					</div>
					<FormField
						control={form.control}
						name='review'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										placeholder='Tell us your experience'
										{...field}
										className='h-24'
									></Textarea>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='grid'>
					<Button type='submit'>Proceed</Button>
				</div>
			</form>
		</Form>
	);
}
