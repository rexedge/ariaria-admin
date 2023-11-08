import Link from 'next/link';
import React from 'react';

export default function VerinpficationPage() {
	return (
		<form className=''>
			<div className='flex flex-col items-center '>
				<h1 className='font-bold text-4xl font-libre'>
					Verification
				</h1>
				<p>Enter verification code sent to your email </p>
			</div>
			<div className='p-5 flex flex-col gap-5 items-start mb-16'>
				<input
					className='h-8 px-2 py-6 rounded border-2 w-full bg-transparent placeholder:text-gray-900'
					placeholder='Email Address'
				/>
				<div className='flex justify-center gap-4 w-full'>
					<p className='flex gap-2'>
						{`Didn't receive a code?`}
						<Link
							href='/password-reset '
							className='text-primary'
						>
							Resend
						</Link>
					</p>
				</div>
			</div>

			<button className='  flex justify-center items-center h-10 w-full bg-primary text-background rounded-lg '>
				Sign In
			</button>
		</form>
	);
}
