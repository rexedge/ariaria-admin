import { FilledRevenueIcons } from '@/src/lib/icons';
import React from 'react';

export default function DashboardCard({
	icon = <FilledRevenueIcons />,
	title = 'Total revenue',
	text = '12K',
}: {
	icon?: React.ReactNode;
	title?: string;
	text?: string;
}) {
	return (
		<div className='rounded-2xl bg-white h-32 shrink-0 flex justify-center items-center gap-5 2xl:gap-10 p-5 lg:p-8'>
			<div className='text-primary'>{icon}</div>
			<div className=''>
				<div className='font-light'>{title}</div>
				<div className='font-bold text-2xl font-libre'>{text}</div>
			</div>
		</div>
	);
}
