import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Jap from './json-animation-player';

export default function LogoutButton() {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant='link'
						className='border-t rounded-none hover:no-underline'
					>
						Logout
					</Button>
				</DialogTrigger>

				<DialogContent className='w-full max-w-[250px] md:max-w-sm gap-0'>
					<div className='h-10 border-b w-full flex items-center justify-center font-libre font-bold'>
						Logout
					</div>
					<div className='p-5 flex flex-col items-center'>
						<div className='h-48 w-48 '>
							<Jap animation='/animations/cart-loading.json' />
						</div>
						<div className='text-xs mb-4'>
							Are you sure you want to logout?
						</div>
						<Button className='w-full max-w-[230px]'>
							Logout
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
