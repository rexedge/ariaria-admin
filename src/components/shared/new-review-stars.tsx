'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Star from './star';
import { cATN } from '@/src/lib/utils';

export const NewReviewStars = ({
	setRating,
}: {
	setRating: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [stars, setStars] = useState([0, 0, 0, 0, 0]);

	const handleMouseEnter = (index: number) => {
		const newStars = stars.map((_, i) => (i <= index ? 1 : 0));
		setStars(newStars);
	};

	// const handleMouseLeave = () => {
	// 	setStars([0, 0, 0, 0, 0]);
	// };

	const handleClick = () => {
		const rating = cATN(stars);
		setRating(rating);
	};

	return (
		<div className='flex mx-auto gap-1'>
			{stars.map((a, index) => (
				<div
					key={index}
					onMouseEnter={() => handleMouseEnter(index)}
					// onMouseLeave={handleMouseLeave}
					onClick={handleClick}
				>
					<Star fill={a} />
				</div>
			))}
		</div>
	);
};

export default NewReviewStars;
