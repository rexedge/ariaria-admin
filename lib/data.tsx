import React from 'react';
import * as Icons from '@/lib/icons';

export const CATEGORIES = [
	{
		title: 'Fashion And Apparel',
		image: '/category-grids/fashion.jpg',
	},
	{
		title: 'Gadgets',
		image: '/category-grids/gadgets.jpg',
	},
	{
		title: 'Home And Furniture',
		image: '/category-grids/home.jpg',
	},
	{
		title: 'Books and Media',
		image: '/category-grids/books.jpg',
	},
	{
		title: 'Groceries and Food',
		image: '/category-grids/groceries.jpg',
	},
	{
		title: 'Beauty and Personal Care',
		image: '/category-grids/beauty.jpg',
	},
];
export const NAV_BAR_LINKS: INavLink[] = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Category',
		href: '/category',
		sub: CATEGORIES,
	},
	{
		title: 'About Us',
		href: '/about-us',
	},
];
export const HERO_ITEMS: IImage[] = [
	{
		id: 1,
		src: '/woman-shopping.png',
		heading: (
			<div>
				Explore. <span className='text-primary'>Shop.</span>{' '}
				Repeat...
			</div>
		),
	},
	{
		id: 2,
		src: '/man-handbag.png',
		heading: (
			<div>
				Explore. <span className='text-primary'>Two.</span>{' '}
				Repeat...
			</div>
		),
	},
	{
		id: 3,
		src: '/woman-handbag.png',
		heading: (
			<div>
				Five. <span className='text-primary'>Shop.</span> Repeat...
			</div>
		),
	},
];
export const CART_ITEMS = [
	{
		product: 'Shoes',
		price: '20,000',
		size: '32',
		color: 'Black',
		image: '/cartproduct1.png',
	},
	{
		product: 'Shoes',
		price: '42,000',
		size: '36',
		color: 'Red',
		image: '/cartproduct2.png',
	},
	{
		product: 'Shoes',
		price: '23,000',
		size: '45',
		color: 'Brown',
		image: '/cartproduct3.png',
	},
	{
		product: 'Shoes',
		price: '30,000',
		size: '35',
		color: 'Blue',
		image: '/cartproduct4.png',
	},
];
export const FEATURED_ITEMS: IProduct[] = [
	{
		image: '/skirt.png',
		name: 'Skirt',
		price: 20000,
		discountPrice: 50000,
		discountPercent: 50,
		category: 'Fashion and Apparels',
		subCategory: [''],
	},

	{
		image: '/nike.png',
		name: 'Nike',
		price: 42000,
		discountPrice: 52000,
		discountPercent: 52,
		category: 'Gadgets',
		subCategory: [''],
	},
	{
		image: '/top.png',
		name: 'Top',
		price: 23000,
		discountPrice: 53000,
		discountPercent: 23,
		category: 'Books and Media',
		subCategory: [''],
	},
	{
		image: '/heels.png',
		name: 'Heels',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 15,
		category: 'Groceries and Food',
		subCategory: [''],
	},
	{
		image: '/charmflower.png',
		name: 'Charm Flower',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 50,
		category: 'Home and Funitures',
		subCategory: [''],
	},
	{
		image: '/chriswatch.png',
		name: 'Chris Watch',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 10,
		category: 'Beauty and Personal Care',
		subCategory: [''],
	},
	{
		image: '/wallclock.png',
		name: 'Wall Clock',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 20,
		category: '',
		subCategory: [''],
	},
	{
		image: '/xwatch.png',
		name: 'X Watch',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 5,
		category: '',
		subCategory: [''],
	},
];
export const LATEST_ITEMS: IProduct[] = [
	{
		image: '/latestmacbookpro.png',
		name: 'Macbook Pro',
		price: 20000,
	},

	{
		image: '/latestearpods.png',
		name: 'Earpods',
		price: 42000,
	},
	{
		image: '/latestiphone16.png',
		name: 'IPhone16',
		price: 23000,
	},
	{
		image: '/latestyellowhoddle.png',
		name: 'Yellow Hoddle',
		price: 30000,
	},
	{
		image: '/latestcamera.png',
		name: 'Camera',
		price: 30000,
	},
	{
		image: '/latestbeautyset.png',
		name: 'Beauty Set',
		price: 30000,
	},
	{
		image: '/latestmarykay.png',
		name: 'Marykay',
		price: 30000,
	},
	{
		image: '/latestwatch.png',
		name: 'Watch',
		price: 30000,
	},
];
export const BEST_SELLING_ITEMS: IProduct[] = [
	{
		image: '/bestsellingfacekit',
		name: 'Face Kit',
		price: 20000,
	},

	{
		image: '/bestsellingeyeglasses',
		name: 'Eye Glasses',
		price: 42000,
	},
	{
		image: '/bestsellingzara',
		name: 'Zara',
		price: 23000,
	},
	{
		image: '/bestsellingreddress',
		name: 'Red Dress',
		price: 30000,
	},
	{
		image: '/bestsellingrougeperfume',
		name: 'Rouge Perfume',
		price: 30000,
	},
	{
		image: '/bestsellinggio',
		name: 'Gio',
		price: 30000,
	},
	{
		image: '/bestsellingchannel',
		name: 'Channel',
		price: 30000,
	},
	{
		image: '/bestsellingdior',
		name: 'Dior',
		price: 30000,
	},
	{
		image: '/bestsellingwristwatch',
		name: 'Watch',
		price: 40000,
	},
	{
		image: '/bestsellingdress',
		name: 'Dress',
		price: 30000,
	},
	{
		image: '/bestsellingstrippants',
		name: 'Strip Pants',
		price: 30000,
	},
	{
		image: '/bestsellingrougepurse',
		name: 'Rouge Purse',
		price: 30000,
	},
	{
		image: '/bestsellingchannelwatch',
		name: 'Channel',
		price: 30000,
	},
	{
		image: '/bestsellinggiowatch',
		name: 'Gio',
		price: 30000,
	},
	{
		image: '/bestsellingzarawatch',
		name: 'Zara',
		price: 30000,
	},
	{
		image: '/bestsellingdiorwatch',
		name: 'Dior',
		price: 30000,
	},
];
export const FOOTER_ITEMS: IFooterItemsProps[] = [
	{
		title: 'Contact Us',
		links: [
			{
				icon: <Icons.LocationIcon />,
				name: '4th floor,Polystar building, Manuwa bus stop, Lekki phase 1, Lagos, Nigeria',
				link: 'https://goo.gl/maps/igGWyLjzogTEvUhg9',
			},
			{
				icon: <Icons.PhoneIcon />,
				name: '09013 447 0693',
				link: 'tel:090134470693',
			},
			{
				icon: <Icons.EmailIcon />,
				name: 'Customersupport@24modilemech.com',
				link: 'Customersupport@24modilemech.com',
			},
		],
	},
	{
		title: 'Quick Links',
		links: [
			{ name: 'About Us', link: '/about' },
			{ name: 'Terms Of Use', link: '/terms&condition' },
			{ name: 'Privacy & Policy', link: '/terms&condition' },
			{ name: 'Frequently Asked Questions', link: '/faqs' },
		],
	},
];
export const SocialMedia: ISocialMediaProps[] = [
	{
		name: 'twitter',
		link: 'https://twitter.com/ariaria',
		icon: <Icons.TwitterIcon />,
	},
	{
		name: 'facebook',
		link: 'https://facebook.com/ariaria',
		icon: <Icons.FacebookIcon />,
	},
	{
		name: 'instagram',
		link: 'https://instagram.com/ariaria',
		icon: <Icons.InstagramIcon />,
	},

	{
		name: 'youtube',
		link: 'https://youtube.com',
		icon: <Icons.YoutubeIcon />,
	},
	{
		name: 'linkedin',
		link: 'https://linkedin.com/ariaria',
		icon: <Icons.LinkedinIcon />,
	},
];
export const ALL_PRODUCTS: IStoreProduct[] = [
	{
		id: 0,
		productId: 'ghdb47-7848dbbdey-89874bdbhdb-hhgbdhfybe',
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Skirt',
		price: 20000,
		brand: 'Gucci',
		discountPrice: 50000,
		discountPercent: 50,
		stock: 200,
		description:
			'Considering the fact that the inflation rates are growing every year it does not matter how much we earn but what matters is how much we save. Saving money can help you become financially secure. ',
		category: 'Fashion and Apparels',
		subCategory: ['women', 'skirt'],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Mike Jones',
				date: '2023-10-17T11:30:40Z',
				rating: 3.5,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Roney Marcus',
				date: '2023-10-17T11:30:40Z',
				rating: 5,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Jonathan Adams',
				date: '2023-10-17T11:30:40Z',
				rating: 4,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Nathan Hobbs',
				date: '2023-10-17T11:30:40Z',
				rating: 4.5,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Shawn Gibbs',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Kate Billy',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Hanna Williams',
				date: '2023-10-17T11:30:40Z',
				rating: 5,
				comment: 'This is exactly what I was expecting',
			},
			{
				author: 'Steph Jobs',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
	{
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Nike',
		price: 42000,
		discountPrice: 52000,
		discountPercent: 52,
		category: 'Gadgets',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 3,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 1,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Hanna Williams',
				date: '2023-10-17T11:30:40Z',
				rating: 5,
				comment: 'This is exactly what I was expecting',
			},
		],
	},
	{
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Top',
		price: 23000,
		discountPrice: 53000,
		discountPercent: 23,
		category: 'Books and Media',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
			{
				author: 'Hanna Williams',
				date: '2023-10-17T11:30:40Z',
				rating: 5,
				comment: 'This is exactly what I was expecting',
			},
		],
	},
	{
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Heels',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 15,
		category: 'Groceries and Food',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
	{
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Charm Flower',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 50,
		category: 'Home and Funitures',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
	{
		image: [
			'/skirt.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Chris Watch',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 10,
		category: 'Beauty and Personal Care',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
	{
		image: [
			'/wallclock.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'Wall Clock',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 20,
		category: '',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
	{
		image: [
			'/xwatch.png',
			'/nike.png',
			'/top.png',
			'/heels.png',
			'/charmflower.png',
		],
		name: 'X Watch',
		price: 30000,
		discountPrice: 50000,
		discountPercent: 5,
		category: '',
		subCategory: [''],
		reviews: [
			{
				author: 'Frank Idoho',
				date: '2023-10-18T11:30:40Z',
				rating: 5,
				comment: 'This is a very nice product',
			},
			{
				author: 'Paul Smirk',
				date: '2023-10-17T11:30:40Z',
				rating: 2,
				comment: 'This is a not what I was expecting',
			},
		],
	},
];
export const ACCOUNT_MENU_ITEMS = [
	{ name: 'My Account', href: '/account', icon: <Icons.UserIcon /> },
	{
		name: 'Order History',
		href: '/order-history',
		icon: <Icons.OrderIcon />,
	},
	{ name: 'Address', href: '/address', icon: <Icons.AddressIcon /> },
	{ name: 'Liked Items', href: '/liked-items', icon: <Icons.LikedIcon /> },
	{
		name: 'Notifications',
		href: '/notifications',
		icon: <Icons.NotificationIcon />,
	},
];
export const USER_INFORMATION = [
	{
		title: 'Name',
		info: 'John Doe',
	},
	{
		title: 'Email',
		info: 'john@doe.com',
	},
	{
		title: 'Phone Number',
		info: '+234 813 567 5674',
	},
	{
		title: 'Default Address',
		info: '28, Bush lane, Lagos Nigeria.',
	},
];
export const ORDERS: IOrderItem[] = [
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
	{
		id: '01',
		delivery: 'home-delivery',
		status: 'successful',
		products: ALL_PRODUCTS.slice(0, 2),
		date: '15-05-1995',
		profile: {
			email: 'ap.oyeniran@gmail.com',
			phone: '+2348061719533',
			address: '512 road, Festac, Lagos, Nigeria',
		},
	},
];
export const NOTIFICATIONS: INotificationItem[] = [
	{
		id: '01',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/chriswatch.png',
		type: 'order-canceled',
	},
	{
		id: '02',
		date: '2023-10-25T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/wallclock.png',
		type: 'order-delivered',
	},
	{
		id: '03',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/xwatch.png',
		type: 'payment-failed',
	},
	{
		id: '04',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/top.png',
		type: 'payment-successful',
	},
	{
		id: '05',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/nike.png',
		type: 'payment-successful',
	},
	{
		id: '01',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/chriswatch.png',
		type: 'order-canceled',
	},
	{
		id: '02',
		date: '2023-10-25T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/wallclock.png',
		type: 'order-delivered',
	},
	{
		id: '03',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/xwatch.png',
		type: 'payment-failed',
	},
	{
		id: '04',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/top.png',
		type: 'payment-successful',
	},
	{
		id: '05',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/nike.png',
		type: 'payment-successful',
	},
	{
		id: '01',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/chriswatch.png',
		type: 'order-canceled',
	},
	{
		id: '02',
		date: '2023-10-25T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/wallclock.png',
		type: 'order-delivered',
	},
	{
		id: '03',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/xwatch.png',
		type: 'payment-failed',
	},
	{
		id: '04',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/top.png',
		type: 'payment-successful',
	},
	{
		id: '05',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/nike.png',
		type: 'payment-successful',
	},
	{
		id: '01',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/chriswatch.png',
		type: 'order-canceled',
	},
	{
		id: '02',
		date: '2023-10-25T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/wallclock.png',
		type: 'order-delivered',
	},
	{
		id: '03',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/xwatch.png',
		type: 'payment-failed',
	},
	{
		id: '04',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/top.png',
		type: 'payment-successful',
	},
	{
		id: '05',
		date: '2023-10-26T04:28:52Z',
		order: ORDERS[0],
		message: '',
		image: '/nike.png',
		type: 'payment-successful',
	},
];
export const SIDE_BAR_LINKS = [
	{
		name: 'Dashboard',
		href: '/',
		icon: <Icons.DashboardIcon />,
	},
	{
		name: 'Categories',
		href: '/categories',
		icon: <Icons.CategoriesIcon />,
	},
	{
		name: 'Products',
		href: '/products',
		icon: <Icons.ProductsIcon />,
	},
	{
		name: 'Orders',
		href: '/orders',
		icon: <Icons.OrdersIcon />,
	},
	{
		name: 'Customers',
		href: '/customers',
		icon: <Icons.CustomersIcon />,
	},
	{
		name: 'Statistics',
		href: '/statistics',
		icon: <Icons.StatisticsIcon />,
	},
	{
		name: 'Settings',
		href: '/settings',
		icon: <Icons.SettingsIcon />,
	},
];
export const DASHBOARD_CARD = [
	{
		icon: <Icons.FilledCustomersIcon />,
		title: 'Revenue',
		text: '12K',
	},
	{
		icon: <Icons.FilledPlacedOrdersIcon />,
		title: 'Orders',
		text: '1.5K',
	},
	{
		icon: <Icons.FilledCustomersIcon />,
		title: 'Customers',
		text: '1K',
	},
	{
		icon: <Icons.FilledSalesIcon />,
		title: 'Sales',
		text: '500K',
	},
];
export const SUBCATEGORIES = [
	{ title: 'Men', image: '/nike.png' },
	{ title: 'Women', image: '/top.png' },
	{ title: 'Accessories', image: '/skirt.png' },
	{ title: 'Unisex', image: '/wallclock.png' },
	{ title: 'Children', image: '/lamp.png' },
	{ title: 'Jewelry', image: '/heels.png' },
	{ title: 'Men', image: '/nike.png' },
	{ title: 'Women', image: '/top.png' },
	{ title: 'Accessories', image: '/skirt.png' },
	{ title: 'Unisex', image: '/wallclock.png' },
	{ title: 'Children', image: '/lamp.png' },
	{ title: 'Jewelry', image: '/heels.png' },
];
