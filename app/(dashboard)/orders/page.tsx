import DatePicker from '@/components/ui/date-picker';
import { ORDERS } from '@/lib/data';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable } from '@/components/ui/table/data-table';
import { ordersColumn } from '@/components/ui/table/columns';

export default function OrderPage() {
	const orders = ORDERS;
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
					<TabsList className='grid w-full max-w-lg grid-cols-4 border'>
						<TabsTrigger value='all'>All</TabsTrigger>
						<TabsTrigger value='pending'>Pending</TabsTrigger>
						<TabsTrigger value='successful'>
							Successful
						</TabsTrigger>
						<TabsTrigger value='failed'>Failed</TabsTrigger>
					</TabsList>
					<TabsContent value='all'>
						<DataTable
							showSearch
							searchWith='name'
							searchWithPlaceholder='Search with name'
							showColumns
							showPagination
							columns={ordersColumn}
							data={orders || []}
						/>
					</TabsContent>
					<TabsContent value='pending'>
						Pending... ... ... ... ...
					</TabsContent>
					<TabsContent value='successful'>
						Successful... ... ... ... ...
					</TabsContent>
					<TabsContent value='failed'>
						Failed... ... ... ... ...
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
