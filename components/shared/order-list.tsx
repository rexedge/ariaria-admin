'use client';
import { useState } from 'react';
import { DataPagination } from './pagination';
import OrderHistoryItem from './order-history-item';

interface IOrderList {
	orders: IOrderItem[];
	showSelected?: boolean;
	rowsPerPage?: boolean;
	showPagination?: boolean;
}

export function OrderList(props: IOrderList) {
	const [page, setPage] = useState<number>(1); // State for page
	const [pageSize, setPageSize] = useState<number>(12); // State for pageSize

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
	};

	const orders = props.orders;
	const totalItems: number = orders.length;
	const ntd = orders.slice((page - 1) * pageSize, page * pageSize);

	return (
		<>
			<div className='flex flex-col gap-5'>
				{ntd.map((a) => (
					<OrderHistoryItem key={a.id} />
				))}
			</div>

			{props.showPagination && (
				<DataPagination
					showSelected={props.showSelected}
					rowsPerPage={props.rowsPerPage}
					page={page}
					pageSize={pageSize}
					totalItems={totalItems}
					onPageChange={handlePageChange}
					onPageSizeChange={handlePageSizeChange}
				/>
			)}
		</>
	);
}
