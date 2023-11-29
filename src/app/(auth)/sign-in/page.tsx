import SignInForm from '@/src/components/forms/sign-in-form';
import React from 'react';

export default function SignIn({
	searchParams,
}: {
	searchParams: { error: string };
}) {
	return (
		<div className='flex flex-col gap-10 items-center w-full'>
			<div className='flex flex-col items-center '>
				<h1 className='font-bold text-4xl font-libre'>Sign In</h1>
				<p>Welcome To Ariaria </p>
			</div>
			<SignInForm error={searchParams.error} />
		</div>
	);
}
