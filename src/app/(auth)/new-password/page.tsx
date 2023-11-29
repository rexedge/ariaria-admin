import React from 'react';

export default function NewPasswordPage() {
	return (
		<>
			<div className='flex flex-col items-center pb-9   '>
				<h1 className='font-bold text-4xl font-libre'>
					New Password
				</h1>
				<p>Set your new password</p>
			</div>

			<div className='p-5 flex flex-col gap-32 items-start  '>
				<div className='flex flex-col w-full gap-5'>
					<div className=' relative w-full '>
						<input
							className='h-8 px-2 py-6 rounded border-2 w-full bg-transparent placeholder:text-gray-900'
							placeholder='Password'
						/>
						<svg
							className=' absolute top-4 right-4  '
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z'
								stroke='#292D32'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z'
								stroke='#292D32'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>

					<div className=' relative w-full'>
						<input
							className='h-8 px-2 py-6 rounded border-2 w-full bg-transparent placeholder:text-gray-900'
							placeholder='Confirm Password'
						/>
						<svg
							className=' absolute top-4 right-4 '
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z'
								stroke='#292D32'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z'
								stroke='#292D32'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>

				<button className='flex justify-center items-center h-10 w-full bg-primary text-background rounded-lg  '>
					Proceed
				</button>
			</div>
		</>
	);
}
