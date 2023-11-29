import React from 'react';

interface TagProps {
	children: React.ReactNode;
	onClose: () => void;
}

const Tag: React.FC<TagProps> = ({ children, onClose }) => {
	return (
		<div className='rounded border px-2 flex gap-2 bg-white shadow-inner capitalize items-center hover:bg-white/50 shrink-0'>
			<span className='text-sm'>{children}</span>
			<button
				type='button'
				className='tag-close'
				onClick={onClose}
			>
				&times;
			</button>
		</div>
	);
};

export default Tag;
