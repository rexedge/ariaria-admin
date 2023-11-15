import DatePicker from '@/components/ui/date-picker';
import { CUSTOMERS } from '@/lib/data';
import React from 'react';
import { DataTable } from '@/components/ui/table/data-table';
import { customersColumn } from '@/components/ui/table/columns';

export default function CustomerPage() {
	const customers = CUSTOMERS;
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-between'>
				<div className=''>
					<div className=' font-libre font-bold'>
						Total Customers
					</div>
					<div className='text-xs'>{customers.length}</div>
				</div>
				<div className=''>
					<DatePicker />
				</div>
			</div>
			<div className=''>
				<DataTable
					showSearch
					searchWith='status'
					searchWithPlaceholder='Search with name'
					showColumns
					showPagination
					columns={customersColumn}
					data={customers || []}
				/>
			</div>
		</div>
	);
}
