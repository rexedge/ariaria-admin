import DatePicker from '@/src/components/ui/date-picker';
import { CUSTOMERS } from '@/src/lib/data';
import React from 'react';
import { DataTable } from '@/src/components/ui/table/data-table';
import { customersColumn } from '@/src/components/ui/table/columns';
import { getCustomers } from '@/src/lib/controller/customers-controller';

export default async function CustomerPage() {
	const customers = CUSTOMERS;
	const c = await getCustomers();
	console.log(c);
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
