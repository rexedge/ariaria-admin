import DatePicker from '@/src/components/ui/date-picker';
import { ORDERS } from '@/src/lib/data';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { DataTable } from '@/src/components/ui/table/data-table';
import { ordersColumn } from '@/src/components/ui/table/columns';

export default function OrderPage() {
	const orders = ORDERS;
	const pendingOrders = ORDERS.filter((order) => order.status === 'pending');
	const failedOrders = ORDERS.filter((order) => order.status === 'failed');
	const awaitingOrders = ORDERS.filter(
		(order) => order.status === 'awaiting'
	);
	const successfulOrders = ORDERS.filter(
		(order) => order.status === 'successful'
	);
	return (
		<div className='flex flex-col gap-5'>
			<div className='flex justify-between'>
				<div className=''>
					<div className=' font-libre font-bold'>
						Total Orders
					</div>
					<div className='text-xs'>{orders.length}</div>
				</div>
				<div className=''>
					<DatePicker />
				</div>
			</div>
			<div className=''>
				<Tabs
					defaultValue='all'
					className=''
				>
					<TabsList className='grid w-full max-w-xl grid-cols-5 border'>
						<TabsTrigger value='all'>All</TabsTrigger>
						<TabsTrigger value='pending'>Pending</TabsTrigger>
						<TabsTrigger value='successful'>
							Successful
						</TabsTrigger>
						<TabsTrigger value='awaiting'>
							Awaiting
						</TabsTrigger>
						<TabsTrigger value='failed'>Failed</TabsTrigger>
					</TabsList>
					<TabsContent value='all'>
						<DataTable
							showSearch
							searchWith='status'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={orders || []}
						/>
					</TabsContent>
					<TabsContent value='pending'>
						<DataTable
							showSearch
							searchWith='status'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={pendingOrders || []}
						/>
					</TabsContent>
					<TabsContent value='successful'>
						<DataTable
							showSearch
							searchWith='status'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={successfulOrders || []}
						/>
					</TabsContent>
					<TabsContent value='awaiting'>
						<DataTable
							showSearch
							searchWith='status'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={awaitingOrders || []}
						/>
					</TabsContent>
					<TabsContent value='failed'>
						<DataTable
							showSearch
							searchWith='status'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={failedOrders || []}
						/>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
