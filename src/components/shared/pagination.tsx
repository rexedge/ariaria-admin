'use client';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/src/components/ui/select';
import { Button } from '@/src/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface DataPaginationProps {
	showSelected?: boolean;
	showCurrentPage?: boolean;
	rowsPerPage?: boolean;
	page: number; // Current page
	pageSize: number; // Number of items per page
	totalItems: number; // Total number of items
	onPageChange: (newPage: number) => void; // Function to handle page change
	onPageSizeChange: (newPageSize: number) => void; // Function to handle page size change
}

export function DataPagination({
	showSelected,
	showCurrentPage,
	rowsPerPage,
	page,
	pageSize,
	totalItems,
	onPageChange,
	onPageSizeChange,
}: DataPaginationProps) {
	const totalPages = Math.ceil(totalItems / pageSize);

	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<Button
					key={i}
					variant={page === i ? 'default' : 'ghost'}
					className={`${
						page !== i && 'text-foreground'
					} p-0 h-8 w-8 rounded-full`}
					onClick={() => onPageChange(i)}
					// disabled={page === i}
				>
					{i}
				</Button>
			);
		}
		return pageNumbers;
	};

	return (
		<div className='flex flex-col md:flex-row items-center justify-center w-full font-libre'>
			{showSelected && (
				<div className='flex-1 text-sm text-muted-foreground'>
					{`${pageSize * (page - 1)} - ${Math.min(
						pageSize * page,
						totalItems
					)} of ${totalItems} row(s) selected.`}
				</div>
			)}
			{rowsPerPage && (
				<div className='flex items-center justify-center'>
					<p className='text-sm font-medium'>Rows per page</p>
					<Select
						value={pageSize.toString()}
						onValueChange={(value) => {
							onPageSizeChange(Number(value));
						}}
					>
						<SelectTrigger className='h-8 w-[70px]'>
							<SelectValue
								placeholder={pageSize.toString()}
							/>
						</SelectTrigger>
						<SelectContent side='top'>
							{[4, 8, 12, 16, 20, 32, 40].map(
								(pageSizeOption) => (
									<SelectItem
										key={pageSizeOption}
										value={pageSizeOption.toString()}
									>
										{pageSizeOption}
									</SelectItem>
								)
							)}
						</SelectContent>
					</Select>
				</div>
			)}
			<div className='flex items-center space-x-6 lg:space-x-8 justify-end'>
				{showCurrentPage && (
					<div className='flex w-[100px] items-center justify-center text-sm font-medium'>
						{`Page ${page} of ${totalPages}`}
					</div>
				)}
				<div className='flex items-center space-x-1'>
					<Button
						variant='ghost'
						className='text-foreground p-0 h-8 w-8 rounded-full'
						onClick={() => {
							if (page > 1) {
								onPageChange(page - 1);
							}
						}}
						disabled={page === 1}
					>
						<span className='sr-only'>
							Go to previous page
						</span>
						<ChevronLeftIcon className='h-4 w-4' />
					</Button>
					{renderPageNumbers()}
					<Button
						variant='ghost'
						className='text-foreground p-0 h-8 w-8 rounded-full'
						onClick={() => {
							if (page < totalPages) {
								onPageChange(page + 1);
							}
						}}
						disabled={page === totalPages}
					>
						<span className='sr-only'>Go to next page</span>
						<ChevronRightIcon className='h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
