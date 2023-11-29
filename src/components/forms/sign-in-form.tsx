'use client';
import React from 'react';
import { Input } from '../ui/input';
import PasswordField from '../layout/passwordField';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '../ui/checkbox';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';

const signInFormSchema = z.object({
	email: z
		.string({ required_error: 'Enter an email' })
		.email({ message: 'Enter valid email' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters' })
		.max(20, { message: 'Password must be at most 20 characters' }),
});

type SignInFormValue = z.infer<typeof signInFormSchema>;

const defaultValues: Partial<SignInFormValue> = {
	email: '',
	password: '',
};

export default function SignInForm({ error }: { error?: string }) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const router = useRouter();

	const form = useForm<SignInFormValue>({
		resolver: zodResolver(signInFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	async function onSubmit(data: SignInFormValue) {
		setIsLoading(true);
		try {
			const signInResponse = await signIn('credentials', {
				email: data.email,
				password: data.password,
				redirect: true,
				callbackUrl: '/',
			});
			router.push('/');
			setIsLoading(false);
			return signInResponse;
		} catch (error: any) {
			console.log(error);
			toast.error(error?.message || 'Check Internet');
			setIsLoading(false);
			throw new Error(error);
		}
	}

	return (
		<Form {...form}>
			<form
				className='flex flex-col w-full lg:px-8 gap-16'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='flex flex-col gap-5'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Email Address'
										{...field}
										className='bg-gray-200 '
									/>
								</FormControl>
								<FormMessage className='text-left' />
							</FormItem>
						)}
					/>
					<div className=''>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PasswordField
											{...field}
											placeholder='Password'
											className='bg-gray-200 '
										/>
									</FormControl>
									<FormMessage className='text-left' />
								</FormItem>
							)}
						/>

						<div className='flex justify-between gap-4 w-full text-xs lg:text-sm pt-2'>
							<div className='flex items-center '>
								<Checkbox />
								<label
									htmlFor='remember-me'
									className=' px-2'
								>
									Remember me
								</label>
							</div>
							<p className=''>
								Forgot Password?{' '}
								<Link
									href='/password-reset '
									className='text-primary'
								>
									Reset
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-5'>
					<Button
						disabled={isLoading}
						type='submit'
					>
						Sign in
					</Button>
					{error && (
						<div className='text-destructive text-center text-xs'>
							{error}
						</div>
					)}
				</div>
			</form>
		</Form>
	);
}
