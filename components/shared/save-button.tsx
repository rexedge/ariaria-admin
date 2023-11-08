'use client';
import { HeartIcon } from '@/lib/icons';
import React from 'react';
import { toast } from 'sonner';

export default function SaveButton({ product }: { product: IStoreProduct }) {
	const [saved, setSaved] = React.useState<boolean>(false);
	return (
		<div
			className={`w-6 h-6 shrink-0 cursor-pointer hover:scale-110 ${
				saved ? 'text-primary' : 'text-white'
			}`}
			onClick={() => {
				setSaved(!saved);
				toast.success(`${name} saved`);
			}}
		>
			<HeartIcon />
		</div>
	);
}
