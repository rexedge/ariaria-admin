'use client';
import { Button } from '@/components/ui/button';
import {
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { DataTableColumnHeader } from './data-column-table-header';
import { OrderCancelIcon, OrderCloseIcon, OrderConfirmIcon } from '@/lib/icons';
import Image from 'next/image';

export const ordersColumn: ColumnDef<IOrderItem>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Order ID'
			/>
		),
		cell: ({ row }) => {
			const order = row.original;
			return <div>#{order.id}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'products',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Product'
			/>
		),
		cell: ({ row }) => {
			const order = row.original;
			return (
				<div className='flex gap-2 items-center'>
					<div className='h-16 aspect-video overflow-clip rounded-lg'>
						<Image
							alt=''
							src={order.products[0].image[0]}
							height={90}
							width={160}
							className='h-full w-full object-cover object-center'
						/>
					</div>
					{order.products[0].name}
				</div>
			);
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'profile',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Phone'
			/>
		),
		cell: ({ row }) => {
			const order = row.original;
			return <div>{order.profile.phone}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'date',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Order Date'
			/>
		),
		cell: ({ row }) => {
			const order = row.original;
			return <div>{order.date}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'products',
		header: () => <div className='text-right'>Amount</div>,
		cell: ({ row }) => {
			const product: IStoreProduct[] = row.getValue('products');
			return (
				<div className='text-right font-medium'>
					₦{product[0].price}
				</div>
			);
		},
	},
	{
		accessorKey: 'status',
		header: () => <div className='flex items-center '>Status</div>,
		cell: ({ row }) => {
			const order = row.original;
			const success =
				'text-awesome-foreground bg-awesome/50 hover:bg-awesome/30';
			const failed =
				'text-destructive bg-destructive/30 hover:bg-destructive/20';
			const pending = 'text-blue-700 bg-blue-300 hover:bg-blue-200';
			const awaiting =
				'text-primary bg-primary/40 hover:bg-primary/20';
			return (
				<Button
					className={`font-light capitalize w-28 ${
						order.status === 'successful'
							? success
							: order.status === 'pending'
							? pending
							: order.status === 'failed'
							? failed
							: awaiting
					}`}
				>
					{order.status}
				</Button>
			);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const order = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='ghost'
							className='h-8 w-8 p-0'
						>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem className='gap-1'>
							<OrderConfirmIcon />
							Confirm Order
						</DropdownMenuItem>
						<DropdownMenuItem className='gap-1'>
							<OrderCloseIcon />
							Close Order
						</DropdownMenuItem>
						<DropdownMenuItem className='gap-1 text-destructive'>
							<OrderCancelIcon />
							Cancel Order
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
export const customersColumn: ColumnDef<ICustomer>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title="Customer's Name"
			/>
		),
		cell: ({ row }) => {
			const customer = row.original;
			return <div className=''>{customer.name}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Email Address'
			/>
		),
		cell: ({ row }) => {
			const customer = row.original;
			return <div>{customer.email}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'phone',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Phone Number'
			/>
		),
		cell: ({ row }) => {
			const customer = row.original;
			return <div>{customer.phone}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'orders',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Orders'
			/>
		),
		cell: ({ row }) => {
			const customer = row.original;
			return <div>{customer.orders.length}</div>;
		},
		sortDescFirst: true,
	},
	{
		accessorKey: 'registrationDate',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Registration Date'
			/>
		),
		cell: ({ row }) => {
			const customer = row.original;
			return <div>{customer.registrationDate}</div>;
		},
		sortDescFirst: true,
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const customer = row.original;

			return (
				<Button
					size='icon'
					variant='ghost'
				>
					<OrderCancelIcon />
				</Button>
			);
		},
	},
];
// export const paymentColumns: ColumnDef<IVehiclePayment>[] = [
// 	{
// 		accessorKey: 'transaction_date',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Date'
// 			/>
// 		),
// 		cell: ({ row }) => {
// 			const payment = row.original;
// 			return (
// 				<Link
// 					href={`/vehicles/${payment.vehicle_id}/payments/${payment.vehicle_transaction_id}`}
// 					className=''
// 				>
// 					{formatDate(payment.transaction_date)}
// 				</Link>
// 			);
// 		},
// 		sortDescFirst: true,
// 	},
// 	{
// 		accessorKey: 'amount',
// 		header: () => <div className=''>Amount</div>,
// 		cell: ({ row }) => {
// 			const amount = parseFloat(row.getValue('amount'));
// 			return <div className='font-medium'>₦{amount}</div>;
// 		},
// 	},
// 	{
// 		accessorKey: 'payment_status',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Status'
// 			/>
// 		),
// 		cell: ({ row }) => {
// 			const status = row.original.payment_status;
// 			const style =
// 				status === 'failed'
// 					? 'text-destructive-foreground'
// 					: status === 'success'
// 					? 'text-awesome-foreground'
// 					: status === 'processing'
// 					? 'text-orange-300'
// 					: 'text-primary';
// 			return <div className={`uppercase ${style}`}>{status}</div>;
// 		},
// 	},
// 	{
// 		accessorKey: 'payment_type',
// 		header: 'Payment Type',
// 		cell: ({ row }) => (
// 			<div className='uppercase'>{row.original.payment_type}</div>
// 		),
// 	},
// 	{
// 		id: 'actions',
// 		cell: ({ row }) => {
// 			const payment = row.original;

// 			return (
// 				<DropdownMenu>
// 					<DropdownMenuTrigger asChild>
// 						<Button
// 							variant='ghost'
// 							className='h-8 w-8 p-0'
// 						>
// 							<span className='sr-only'>Open menu</span>
// 							<MoreHorizontal className='h-4 w-4' />
// 						</Button>
// 					</DropdownMenuTrigger>
// 					<DropdownMenuContent align='end'>
// 						<DropdownMenuLabel>Actions</DropdownMenuLabel>
// 						<DropdownMenuItem
// 							onClick={() =>
// 								navigator.clipboard.writeText(
// 									payment.vehicle_transaction_id
// 								)
// 							}
// 						>
// 							Copy payment ID
// 						</DropdownMenuItem>
// 						<DropdownMenuSeparator />
// 						<DropdownMenuItem asChild>
// 							<Dialog>
// 								<DialogTrigger className='px-2 text-sm'>
// 									View receipt
// 								</DialogTrigger>
// 								<DialogContent>
// 									<Receipt receipt={payment} />
// 									<DialogFooter className='grid grid-cols-2 gap-3'>
// 										<Button>Print</Button>
// 									</DialogFooter>
// 								</DialogContent>
// 							</Dialog>
// 						</DropdownMenuItem>
// 						<DropdownMenuItem asChild>
// 							<Link
// 								href={`/vehicles/${payment.vehicle_id}/payments/${payment.vehicle_transaction_id}`}
// 							>
// 								View payment details
// 							</Link>
// 						</DropdownMenuItem>
// 					</DropdownMenuContent>
// 				</DropdownMenu>
// 			);
// 		},
// 	},
// ];
// export const adminsColumns: ColumnDef<IAdmin>[] = [
// 	{
// 		accessorKey: 'name',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Name'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<Link
// 				href={`/admins/${row.original.admin_id}`}
// 				className=''
// 			>
// 				{row.original.name}
// 			</Link>
// 		),
// 	},
// 	{
// 		accessorKey: 'email',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Email'
// 			/>
// 		),
// 		cell: ({ row }) => <div>{row.original.email}</div>,
// 	},
// 	{
// 		accessorKey: 'phone',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Phone'
// 			/>
// 		),
// 		cell: ({ row }) => <div>{row.original.phone}</div>,
// 	},
// 	{
// 		accessorKey: 'blacklisted',
// 		header: 'Status',
// 		cell: ({ row }) => {
// 			if (row.getValue('blacklisted') === true)
// 				return (
// 					<Pill
// 						status={'inactive'}
// 						text={'inactive'}
// 					/>
// 				);
// 			else
// 				return (
// 					<Pill
// 						status={'active'}
// 						text={'active'}
// 					/>
// 				);
// 		},
// 	},
// 	{
// 		id: 'actions',
// 		header: 'Action',
// 		cell: ({ row }) => {
// 			return (
// 				<div className='flex gap-2 justify-start items-center'>
// 					<Link
// 						href={`/admins/${row.original.admin_id}`}
// 						className='h-5 w-5 items-center shrink-0'
// 					>
// 						{editIcon}
// 					</Link>
// 					{/* <DeleteAdminButton id={row.original.admin_id} /> */}
// 				</div>
// 			);
// 		},
// 	},
// ];
// export const agentsColumns: ColumnDef<IAgent>[] = [
// 	{
// 		accessorKey: 'name',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Name'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<Link
// 				href={`/agents/${row.original.agent_id}`}
// 				className=''
// 			>
// 				{row.original.name}
// 			</Link>
// 		),
// 	},
// 	{
// 		accessorKey: 'location',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Location'
// 			/>
// 		),
// 	},
// 	{
// 		accessorKey: 'phone',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Phone'
// 			/>
// 		),
// 		cell: ({ row }) => <div>{row.original.phone}</div>,
// 	},
// 	{
// 		accessorKey: 'is_active',
// 		header: 'Status',
// 		cell: ({ row }) => {
// 			if (row.getValue('is_active') === true)
// 				return (
// 					<Pill
// 						status={'active'}
// 						text={'active'}
// 					/>
// 				);
// 			else
// 				return (
// 					<Pill
// 						status={'inactive'}
// 						text={'inactive'}
// 					/>
// 				);
// 		},
// 	},
// 	{
// 		id: 'actions',
// 		cell: ({ row }) => {
// 			return (
// 				<DropdownMenu>
// 					<DropdownMenuTrigger>
// 						<MoreVertical className='h-4 w-4' />
// 					</DropdownMenuTrigger>
// 					<DropdownMenuContent align='end'>
// 						<DropdownMenuItem asChild>
// 							<Link
// 								href={`/agents/${row.original.agent_id}`}
// 							>
// 								<span className='h-4 w-4 mr-3'>
// 									{editIcon}
// 								</span>
// 								View Agent
// 							</Link>
// 						</DropdownMenuItem>
// 						<DropdownMenuItem className=' text-destructive-foreground'>
// 							<span className='h-4 w-4 mr-3'>
// 								{deleteIcon}
// 							</span>
// 							Delete Agent
// 						</DropdownMenuItem>
// 					</DropdownMenuContent>
// 				</DropdownMenu>
// 			);
// 		},
// 	},
// ];
// export const vehiclesColumns: ColumnDef<IVehicle>[] = [
// 	{
// 		accessorKey: 'Drivers',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Driver'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<Link
// 				href={`/vehicles/${row.original.vehicle_id}`}
// 				className=''
// 			>
// 				{row.original.owners_name}
// 			</Link>
// 		),
// 	},
// 	{
// 		accessorKey: 'plate_number',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Plate Number'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<div className='uppercase'>{row.original.plate_number}</div>
// 		),
// 	},
// 	{
// 		accessorKey: 'status',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Status'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<div className='uppercase'>{row.original.status}</div>
// 		),
// 	},
// 	{
// 		accessorKey: 'category',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Category'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<div className='uppercase'>{row.original.category}</div>
// 		),
// 	},
// 	{
// 		id: 'actions',
// 		cell: ({ row }) => {
// 			const vehicle = row.original;
// 			return (
// 				<DropdownMenu>
// 					<DropdownMenuTrigger>
// 						<MoreVertical className='h-4 w-4' />
// 					</DropdownMenuTrigger>
// 					<DropdownMenuContent
// 						className='border border-black'
// 						align='end'
// 					>
// 						<DropdownMenuItem
// 							className='border-b border-black rounded-none'
// 							asChild
// 						>
// 							<Link
// 								href={`/vehicles/${vehicle.vehicle_id}`}
// 							>
// 								<span className='h-4 w-4 mr-3'>
// 									{editIcon}
// 								</span>
// 								View Vehicle
// 							</Link>
// 						</DropdownMenuItem>
// 						{/* <DropdownMenuItem
// 							className='border-b border-black rounded-none'
// 							asChild
// 						>
// 							<Link
// 								href={`/vehicles/${vehicle.vehicle_id}/payments`}
// 							>
// 								<span className='h-4 w-4 mr-3'>
// 									{paymentIcon}
// 								</span>
// 								View Payment
// 							</Link>
// 						</DropdownMenuItem>
// 						<DropdownMenuItem
// 							className='border-b border-black rounded-none'
// 							asChild
// 						>
// 							<Link
// 								href={`/vehicles/${vehicle.vehicle_id}/fines`}
// 							>
// 								<span className='h-4 w-4 mr-3'>
// 									{finesIcon}
// 								</span>
// 								View Fines
// 							</Link>
// 						</DropdownMenuItem> */}
// 						<DropdownMenuItem className='text-destructive'>
// 							Delete Vehicle
// 						</DropdownMenuItem>
// 						<DropdownMenuItem
// 							className=''
// 							onClick={() =>
// 								navigator.clipboard.writeText(
// 									vehicle.vehicle_id
// 								)
// 							}
// 						>
// 							Copy vehicle ID
// 						</DropdownMenuItem>
// 					</DropdownMenuContent>
// 				</DropdownMenu>
// 			);
// 		},
// 	},
// ];
// export const agentPaymentColumns: ColumnDef<AgentPayment>[] = [
// 	{
// 		accessorKey: 'driver',
// 		header: 'Driver',
// 	},
// 	{
// 		accessorKey: 'amount',
// 		header: () => <div className='text-right'>Amount</div>,
// 		cell: ({ row }) => {
// 			const amount = row.getValue('amount');
// 			return (
// 				<div className='text-right font-medium'>{`₦${amount}`}</div>
// 			);
// 		},
// 	},
// 	{
// 		accessorKey: 'date',
// 		header: 'Date',
// 	},
// 	{
// 		accessorKey: 'status',
// 		header: 'Status',
// 		cell: ({ row }) => {
// 			const status = row.original.status;
// 			const style =
// 				status === 'failed'
// 					? 'text-destructive-foreground'
// 					: status === 'successful'
// 					? 'text-awesome-foreground'
// 					: status === 'pending'
// 					? 'text-orange-300'
// 					: 'text-primary';
// 			return <div className={`uppercase ${style}`}>{status}</div>;
// 		},
// 	},
// 	{
// 		id: 'actions',
// 		cell: ({ row }) => {
// 			const payment = row.original;
// 			return (
// 				<Button
// 					className='gap-2'
// 					onClick={() =>
// 						navigator.clipboard.writeText(payment.driver)
// 					}
// 				>
// 					<div className='h-4 w-4'>{printIcon}</div>Print
// 				</Button>
// 			);
// 		},
// 	},
// ];
// export const viewDriversColumns: ColumnDef<DriverPayment>[] = [
// 	{
// 		accessorKey: 'Date',
// 		header: 'Date',
// 	},
// 	{
// 		accessorKey: 'amount_NGN',
// 		header: () => <div className='text-right'>Amount</div>,
// 		cell: ({ row }) => {
// 			const amount = row.getValue('amount_NGN');
// 			return (
// 				<div className='text-right font-medium'>{`₦${amount}`}</div>
// 			);
// 		},
// 	},
// 	{
// 		accessorKey: 'payment_type',
// 		header: 'Payment Type',
// 		cell: ({ row }) => {
// 			const payment_type = row.original.payment_type;
// 			const style =
// 				payment_type === 'Cash'
// 					? 'text-destructive-foreground'
// 					: payment_type === 'Mobile Transfer'
// 					? 'text-awesome-foreground'
// 					: payment_type === 'Transfer'
// 					? 'text-orange-300'
// 					: 'text-primary';
// 			return (
// 				<div className={`uppercase ${style}`}>{payment_type}</div>
// 			);
// 		},
// 	},

// 	{
// 		accessorKey: 'handled_by',
// 		header: 'Handled By',
// 	},
// 	{
// 		id: 'actions',
// 		cell: ({ row }) => {
// 			const payment = row.original;
// 			return (
// 				<Button
// 					className='gap-2'
// 					onClick={() =>
// 						navigator.clipboard.writeText(payment.driver)
// 					}
// 				>
// 					<div className='h-4 w-4'>{printIcon}</div>Print
// 				</Button>
// 			);
// 		},
// 	},
// ];
// export const driversColumns: ColumnDef<IDriver>[] = [
// 	{
// 		accessorKey: 'firstname',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Name'
// 			/>
// 		),
// 		cell: ({ row }) => (
// 			<Link
// 				href={`/drivers/${row.original.driver_id}`}
// 				className=''
// 			>
// 				{`${row.original.firstname} ${row.original.lastname}`}
// 			</Link>
// 		),
// 	},
// 	{
// 		accessorKey: 'phone',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='Phone'
// 			/>
// 		),
// 	},
// 	{
// 		accessorKey: 'lga',
// 		header: ({ column }) => (
// 			<DataTableColumnHeader
// 				column={column}
// 				title='LGA'
// 			/>
// 		),
// 	},
// 	{
// 		id: 'actions',
// 		header: 'Actions',
// 		cell: ({ row }) => {
// 			const driver = row.original;
// 			return (
// 				<div
// 					className=' cursor-pointer'
// 					onClick={() => {
// 						navigator.clipboard.writeText(driver.driver_id);
// 					}}
// 				>
// 					Copy ID
// 				</div>
// 			);
// 		},
// 	},
// ];
