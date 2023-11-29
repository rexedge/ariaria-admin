'use client';
import { useState } from 'react';
import { DataPagination } from './pagination';
import NotificationItem from './notification-item';

interface INotificationList {
	notifications: INotificationItem[];
	showSelected?: boolean;
	rowsPerPage?: boolean;
	showPagination?: boolean;
}

export function NotificationList(props: INotificationList) {
	const [page, setPage] = useState<number>(1); // State for page
	const [pageSize, setPageSize] = useState<number>(8); // State for pageSize

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
	};

	const notifications = props.notifications;
	const totalItems: number = notifications.length;
	const ntd = notifications.slice((page - 1) * pageSize, page * pageSize);

	return (
		<>
			<div className='flex flex-col gap-5'>
				{ntd.map((a, b) => (
					<NotificationItem
						key={b}
						type={a.type}
						order={a.order}
						message={a.message}
						date={a.date}
						image={a.image}
					/>
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
