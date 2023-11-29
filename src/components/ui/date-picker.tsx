'use client';
import { Button } from '@/src/components/ui/button';
import { Calendar } from '@/src/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/src/components/ui/popover';
import { cn } from '@/src/lib/utils';
import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { DateRange } from 'react-day-picker';

export default function DatePicker() {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	});
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					{date?.from ? (
						date.to ? (
							<>
								{format(date.from, 'LLL dd')} -{' '}
								{format(date.to, 'LLL dd')}
							</>
						) : (
							format(date.from, 'LLL dd, y')
						)
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className='ml-2 h-4 w-4' />
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
	);
}
