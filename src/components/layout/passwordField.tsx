'use client';
import { PasswordIcon } from '@/src/lib/icons';
import React, { useState } from 'react';
import { Input } from '../ui/input';

interface PasswordFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
	placeholder,
	...rest
}) => {
	const [inputType, setInputType] = useState('password');
	const toggleInputType = () => {
		setInputType(inputType === 'password' ? 'text' : 'password');
	};
	return (
		<div className='relative'>
			<span
				onClick={toggleInputType}
				className='cursor-pointer absolute right-0 pr-[20px] my-[12px]'
			>
				<PasswordIcon />
			</span>
			<Input
				{...rest}
				type={inputType}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default PasswordField;
