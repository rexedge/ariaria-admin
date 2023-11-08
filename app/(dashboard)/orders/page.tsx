'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { ORDERS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { DateRange } from 'react-day-picker';

export default function OrderPage() {
	const orders = ORDERS;
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	});

	return (
		<div className='flex flex-col'>
			<div className='flex justify-between'>
				<div className=''>
					<div className=' font-libre font-bold'>
						Total Orders
					</div>
					<div className='text-xs'>1000</div>
				</div>
				<div className=''>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'justify-start text-left font-normal',
									!date && 'text-muted-foreground'
								)}
							>
								<CalendarIcon className='mr-2 h-4 w-4' />
								{date?.from ? (
									date.to ? (
										<>
											{format(
												date.from,
												'LLL dd'
											)}{' '}
											-{' '}
											{format(
												date.to,
												'LLL dd'
											)}
										</>
									) : (
										format(date.from, 'LLL dd, y')
									)
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0'>
							<Calendar
								mode='range'
								selected={date}
								onSelect={setDate}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
}
