import React from 'react';

export default function PasswordReset() {
	return (
		<>
			<div className='flex flex-col items-center pb-9   '>
				<h1 className='font-bold text-4xl   '>Password Reset</h1>
				<p>Enter your registered email address </p>
			</div>

			<div className='p-5 flex flex-col gap-32 items-start  '>
				<input
					className='h-8 px-2 py-6 rounded border-2 w-full bg-transparent placeholder:text-gray-900 '
					placeholder='Email Address'
				/>

				<button className='flex justify-center items-center h-10 w-full bg-primary rounded-lg  '>
					Proceed
				</button>
			</div>
		</>
	);
}
