import StatisticsCard from '@/components/shared/statistics-card';
import DatePicker from '@/components/ui/date-picker';
import MyDropdown from '@/components/ui/my-dropdown';
import { STATISTICS, STATISTICS_DROPDOWN_ITEMS } from '@/lib/data';
import React from 'react';

export default function StatisticsPage() {
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-end gap-3'>
				<DatePicker />
				<MyDropdown
					label='Export Data'
					items={STATISTICS_DROPDOWN_ITEMS}
				/>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10'>
				{STATISTICS.map((stat, key) => (
					<StatisticsCard
						name={stat.name}
						number={stat.number}
						data={stat.data}
						key={key}
					/>
				))}
			</div>
		</div>
	);
}
