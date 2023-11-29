'use client';
import { useState } from 'react';
import { DataPagination } from './pagination';
import LikedItem from './liked-item';

interface ILikedItemList {
	likedItems: IStoreProduct[];
	showSelected?: boolean;
	rowsPerPage?: boolean;
	showPagination?: boolean;
}

export function LikedItemList(props: ILikedItemList) {
	const [page, setPage] = useState<number>(1); // State for page
	const [pageSize, setPageSize] = useState<number>(8); // State for pageSize

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
	};

	const likedItems = props.likedItems;
	const totalItems: number = likedItems.length;
	const litd = likedItems.slice((page - 1) * pageSize, page * pageSize);

	return (
		<>
			<div className='flex flex-col gap-5'>
				{litd.map((a, b) => (
					<LikedItem
						key={b}
						product={a}
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
