import React from 'react';
import StatisticsCardChart from './statistics-card-chart';

export default function StatisticsCard({ name, number, data }: IStatistics) {
	return (
		<div className='w-full aspect-square rounded-2xl bg-background p-5 lg:p-10 font-light flex flex-col shrink-0 flex-grow-0'>
			<div className=''>{name}</div>
			<div className='grid place-items-center font-bold font-libre text-2xl lg:text-4xl h-20 flex-shrink-0 grow-0'>
				{number}
			</div>
			<div className='h-full max-h-48 w-full '>
				<StatisticsCardChart data={data} />
			</div>
		</div>
	);
}
