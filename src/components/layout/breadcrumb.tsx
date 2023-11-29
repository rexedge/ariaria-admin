import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface IBreadcrumbItem {
	name: string;
	path: string;
}

export default function Breadcrumb({
	breadcrumbItems,
}: {
	breadcrumbItems: IBreadcrumbItem[];
}) {
	return (
		<ul className='flex flex-row items-center gap-2'>
			{breadcrumbItems.map((item, id) => {
				return (
					<li
						key={id}
						className='lg:flex items-center text-gray-400 last:text-black hidden last:flex  hover:text-primary'
					>
						<Link
							href={item.path}
							key={item.name}
							className='flex flex-row items-center whitespace-nowrap line-clamp-1'
						>
							{item.name}
							<ChevronRight className='' />
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
