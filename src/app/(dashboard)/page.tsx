import DashboardCard from '@/src/components/pages/admin/dashboard-card';
import OrderHistory from '@/src/components/pages/admin/order-item';
import AriariaLine from '@/src/components/shared/line-chart';
import AriariaPie from '@/src/components/shared/pie-chart';
import { Button } from '@/src/components/ui/button';
import { DASHBOARD_CARD, ORDERS } from '@/src/lib/data';
import { DashboardIllustration } from '@/src/lib/icons';
import Link from 'next/link';
import React from 'react';

export default function AdminDashboard() {
	return (
		<div className='h-full w-full rounded-3xl'>
			<div className='flex h-full gap-5 2xl:gap-8'>
				<div className='w-full lg:w-8/12 xl:w-9/12 h-full flex flex-col gap-5 2xl:gap-8 rounded-2xl shrink-0'>
					<div className='bg-white h-56 rounded-2xl shrink-0 flex justify-between'>
						<div className='shrink-0 flex flex-col py-10 pl-10'>
							<h1 className='text-xl xl:text-xl font-libre mb-2'>
								Welcome back, John Paul
							</h1>
							<p className='mb-6'>
								You have 10 new notifications
							</p>
							<Button
								asChild
								className='w-40'
							>
								<Link href={'/notifications'}>
									View notifications
								</Link>
							</Button>
						</div>
						<div className='relative h-full w-72 xl:w-96 shrink-0 hidden sm:flex'>
							<div className='absolute right-0 bottom-0 h-[90%] xl:h-[110%] flex items-end'>
								<DashboardIllustration />
							</div>
						</div>
					</div>

					<div className='w-full gap-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{DASHBOARD_CARD.map((a, b) => (
							<DashboardCard
								key={b}
								icon={a.icon}
								title={a.title}
								text={a.text}
							/>
						))}
					</div>

					<div className='grid grid-cols-12 gap-5'>
						<div className='col-span-12 md:col-span-8 shrink-0 bg-white rounded-2xl p-5'>
							<div className='flex item-center justify-between'>
								<div className='font-libre font-bold text-xl'>
									Orders
								</div>
								<div className='font-light text-xl'>
									This Week
								</div>
							</div>
							<div className='w-full aspect-[9/7]'>
								<AriariaLine />
							</div>
						</div>
						<div className='col-span-12 md:col-span-4 shrink-0 bg-white rounded-2xl p-5'>
							<div className='h-full w-full shrink-0'>
								<div className='flex item-center justify-between mb-5'>
									<div className='font-libre font-bold text-xl'>
										Top Sales
									</div>
									<div className='font-light text-xl'>
										This Week
									</div>
								</div>
								<div className='w-full aspect-square'>
									<AriariaPie />
									<div className='flex flex-col gap-2 mt-4'>
										<div className='flex items-center gap-2'>
											<div className='h-4 w-4 bg-[#FFBF80] rounded-full' />
											<div className=''>
												Fashion
											</div>
										</div>
										<div className='flex items-center gap-2'>
											<div className='h-4 w-4 bg-[#552A00] rounded-full' />
											<div className=''>
												Gadgets
											</div>
										</div>
										<div className='flex items-center gap-2'>
											<div className='h-4 w-4 bg-[#FFE5CC] rounded-full' />
											<div className=''>
												Groceries
											</div>
										</div>
										<div className='flex items-center gap-2'>
											<div className='h-4 w-4 bg-[#FF7F00] rounded-full' />
											<div className=''>
												Electronics
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='hidden md:block bg-white w-full lg:w-4/12 xl:w-3/12 h-full rounded-2xl'>
					<div className='flex flex-col item-center justify-between p-3'>
						<div className='font-libre font-bold text-xl mb-5'>
							Recent Orders
						</div>
						<div className='flex flex-col gap-3'>
							{ORDERS.slice(0, 7).map((a, b) => (
								<OrderHistory
									key={b}
									id={a.id}
									delivery={a.delivery}
									status={a.status}
									products={a.products}
									profile={a.profile}
									date={a.date}
								/>
							))}
							<Button
								variant={'link'}
								asChild
							>
								<Link href={'/orders'}>View All</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
