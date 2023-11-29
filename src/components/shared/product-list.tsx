'use client';
import { useState } from 'react';
import { DataPagination } from './pagination';
import ProductCard from './product-card';

interface IProductList {
	products: IStoreProduct[];
	showSelected?: boolean;
	rowsPerPage?: boolean;
	showPagination?: boolean;
}

export function ProductList(props: IProductList) {
	const [page, setPage] = useState<number>(1); // State for page
	const [pageSize, setPageSize] = useState<number>(12); // State for pageSize

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
	};

	const products = props.products;
	const totalItems: number = products.length;
	const ptd = products.slice((page - 1) * pageSize, page * pageSize);

	return (
		<div className='grid gap-8'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-4 px-3'>
				{ptd.map((a, b) => (
					<ProductCard
						key={b}
						image={a.image}
						name={a.name}
						price={a.price}
						discountPercent={a.discountPercent}
						discountPrice={a.discountPrice}
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
		</div>
	);
}
