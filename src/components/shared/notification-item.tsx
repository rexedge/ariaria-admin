import { formatDate } from '@/src/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotificationItem({
	id,
	type,
	order,
	date,
	image,
}: INotificationItem) {
	const title =
		type === 'order-canceled'
			? 'Order Canceled'
			: type === 'order-delivered'
			? 'Order Delivered'
			: type === 'payment-failed'
			? 'Payment Failed'
			: type === 'payment-successful'
			? 'Payment Successful'
			: type === 'review-order'
			? 'Review Your Order'
			: 'Enter Notification Type';

	const notificationDate = new Date(date);
	const notificationMessage =
		type === 'order-canceled' ? (
			<div className='text-xs line-clamp-1 lg:line-clamp-2'>
				You have cancelled your order{' '}
				<Link
					href={`/order/${order.id}`}
					className='font-bold'
				>
					{order.id}
				</Link>
			</div>
		) : type === 'order-delivered' ? (
			<div className='text-xs line-clamp-1 lg:line-clamp-2'>
				Your order{' '}
				<Link
					href={`/order/${order.id}`}
					className='font-bold'
				>
					{order.id}
				</Link>{' '}
				has been sent out to you. Thank you for trusting us.
			</div>
		) : type === 'payment-failed' ? (
			<div className='text-xs line-clamp-1 lg:line-clamp-2'>
				Your order{' '}
				<Link
					href={`/order/${order.id}`}
					className='font-bold'
				>
					{order.id}
				</Link>{' '}
				could not be processed as your payment failed.
			</div>
		) : type === 'payment-successful' ? (
			<div className='text-xs line-clamp-1 lg:line-clamp-2'>
				Your order{' '}
				<Link
					href={`/order/${order.id}`}
					className='font-bold'
				>
					{order.id}
				</Link>{' '}
				has been received. Your order will be ready for delivery
				from 12th - 13th of April.
			</div>
		) : type === 'review-order' ? (
			'Review Your Order'
		) : (
			'Enter Notification Type'
		);
	return (
		<div className='bg-background px-2 lg:px-5 py-3 rounded-2xl flex gap-2 lg:gap-5'>
			<div className='shrink-0 min-w-[60px] w-1/6 aspect-square rounded-xl overflow-clip'>
				<Image
					height={300}
					width={300}
					alt=''
					src={image || '/nike.png'}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='w-full flex flex-col justify-between lg:gap-2'>
				<div className='text-sm lg:text-base font-libre font-semibold'>
					{title}
				</div>
				<div className='text-xs'>Nike</div>
				{notificationMessage}
				<div className='text-xs text-end'>
					{formatDate(notificationDate)}
				</div>
			</div>
		</div>
	);
}
