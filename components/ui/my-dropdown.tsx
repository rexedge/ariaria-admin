import React, { ReactNode } from 'react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from './dropdown-menu';
import { Button } from './button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const MyDropdown: React.FC<IMyDropdownProps> = ({ label, items }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>
					{label} <ChevronDown className='ml-2 h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{items.map((item, index) => (
					<DropdownMenuItem
						asChild
						key={index}
					>
						<Link href={item.href}>
							<>
								{item.icon}
								<span className='ml-2'>
									{item.label}
								</span>
							</>
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MyDropdown;
