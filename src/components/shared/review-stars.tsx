import React from 'react';
import Star from './star';
import { cNTA } from '@/src/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import Image from 'next/image';
import ReviewForm from '../forms/review-form';

export default function ReviewStars({
	reviews,
	name,
	image,
	showReviews,
	singular,
	rating,
}: {
	reviews?: IReview[];
	name?: string;
	image?: string;
	showReviews?: boolean;
	singular?: boolean;
	rating?: number;
}) {
	if (!singular) {
		const totalRatings = reviews!.reduce((a, b) => a + b.rating, 0);
		const ratings =
			reviews!.length > 0 ? totalRatings / reviews!.length : 0;
		const stars = cNTA(ratings);
		return (
			<Dialog>
				<DialogTrigger>
					<div className='flex gap-3 items-center'>
						<div className='flex items-center gap-1 text-primary'>
							{stars.map((a, b) => (
								<Star
									key={b}
									fill={a}
								/>
							))}
						</div>
						{showReviews && (
							<div className=''>
								({reviews!.length} review)
							</div>
						)}
					</div>
				</DialogTrigger>
				<DialogContent className='gap-0'>
					<div className='h-12 w-full flex items-center justify-center font-libre font-bold text-lg'>
						Add a review for {name}
					</div>
					<div className='w-full h-40 lg:h-64'>
						<Image
							className='h-40 lg:h-64 w-full object-cover'
							src={image!}
							height={256}
							width={512}
							alt={name || 'Ariaria Product'}
						/>
					</div>
					<div className='p-3 flex flex-col gap-3'>
						<ReviewForm />
					</div>
				</DialogContent>
			</Dialog>
		);
	} else {
		rating;
		const stars = cNTA(rating!);
		return (
			<div className='flex items-center gap-1 text-primary'>
				{stars.map((a, b) => (
					<Star
						key={b}
						fill={a}
					/>
				))}
			</div>
		);
	}
}
