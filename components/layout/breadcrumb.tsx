'use client';
import { unslugify } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment } from 'react';

interface IBreadcrumbItem {
	name: string;
	path: string;
}

const Breadcrumb: React.FC = () => {
	const pathname = usePathname();
	const pathSegments = pathname.split('/');
	const breadcrumbItems = pathSegments.map((segment, index) => {
		return {
			name: unslugify(segment),
			path: pathSegments.slice(0, index + 1).join('/'),
		};
	});
	breadcrumbItems.shift();
	// breadcrumbItems.splice(0, 1);

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
};

export default Breadcrumb;
