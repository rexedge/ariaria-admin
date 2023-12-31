interface INavLink {
	className?: string;
	title: string;
	href?: string;
	icon?: React.ReactNode;
	sub?: INavLinkSub[];
	onClick?: () => void;
}

interface INavLinkSub {
	title: string;
	href?: string;
	image: string | any;
	description?: string;
}

interface INavAction {
	title: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

interface IHeroItem {
	id: number;
	src: string;
	heading: React.ReactNode;
}
interface ICart {
	products: Partial<IStoreProduct>[];
}

interface IProduct {
	image: StaticImageData | string;
	name: string;
	price: number;
	discountPercent?: number;
	discountPrice?: number;
	category?: string;
	subCategory?: string[];
}
interface IReview {
	author: string; // The name of the reviewer
	date: string; // The date the review was posted
	rating: number; // The rating given by the reviewer (e.g., 1 to 5 stars)
	comment: string; // The review comment or feedback
}

interface IProductMedia {
	id: number;
	product_media_id: string;
	product_id: string;
	title: string;
	media: string;
	description: string;
	type: string;
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
}

interface IStoreProduct {
	id?: number;
	product_id?: string;
	image?: string[];
	name: string;
	price: number;
	brand?: string;
	size?: string;
	color?: string;
	description?: string;
	discountPercent?: number;
	discountPrice?: number;
	stock_value?: number;
	stock_option?: 'limited' | 'unlimited';
	type: 'physical' | 'virtual';
	status?: 'available' | 'draft' | 'sold-out';
	reviews?: IReview[];
	tags?: string;
	store_id: string;
	link: string;
	createdAt: string;
	updatedAt: string;
	deleted: boolean;
	category_id: string;
	subcategory_id: string;
	tbl_store: IStore;
	tbl_product_media: IProductMedia[];
}
interface INotificationItem {
	id?: string;
	type:
		| 'payment-successful'
		| 'payment-failed'
		| 'order-delivered'
		| 'order-canceled'
		| 'review-order';
	order: IOrderItem;
	message?: string;
	date: string;
	image: string;
}
interface IOrderItem {
	id: string;
	delivery: 'home-delivery' | 'pick-up';
	status: 'pending' | 'successful' | 'failed' | 'awaiting';
	products: Partial<IStoreProduct>[];
	date: string;
	profile: {
		email: string;
		phone: string;
		address: string;
	};
}
interface IAddressItemProps {
	address: string;
	phone: string;
}

interface IFooterItemLink {
	name: string;
	link: string;
	icon?: React.ReactNode;
}

interface IFooterItemsProps {
	links?: IFooterItemLink[];
	title?: string;
}

interface ISocialMediaProps {
	name: string;
	link: string;
	icon: React.ReactNode;
}

interface IPasswordField {
	placeholder: string;
}

interface IFilter {
	field: string;
	value: string;
}

interface ISearchParams {
	query: string;
	sortBy: 'ascending' | 'descending';
	category?: string;
	price?: string;
	ratings?: string;
}

interface IUser {
	admin_id: string;
	blacklisted: boolean;
	createdAt: string;
	email: string;
	exp?: number;
	iat?: number;
	id: number;
	image: string;
	name: string;
	password: string;
	phone: string;
	role: string;
	updatedAt: string;
	user_type?: string;
}

interface ICategory {
	id: number;
	store_category_id: string;
	store_id: string;
	title: string;
	description: string;
	image: string;
	status: string;
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
}

interface ISubcategory {
	id: number;
	store_subcategory_id: string;
	store_id: string;
	category_id: string;
	title: string;
	description: string;
	image: string;
	status: string;
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
}
interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	showSearch?: boolean;
	showColumns?: boolean;
	searchWith?: string;
	searchWithPlaceholder?: string;
	showPagination?: boolean;
	showSelected?: boolean;
	showRowsPerPage?: boolean;
}
interface ICustomer {
	id: number;
	customerId: string;
	name: string;
	email: string;
	phone: string;
	orders: IOrderItem[];
	registrationDate: string;
}
interface IStatistics {
	name: string;
	number: number;
	data: {
		name: string;
		value: number;
	}[];
}
interface IDropdownItem {
	label: string;
	href: string;
	icon: ReactNode;
}

interface IMyDropdownProps {
	items: DropdownItem[];
	label: string;
}
interface IStatisticsCardChartProps {
	data: {
		name: string;
		value: number;
	}[];
}

interface IStore {
	id: number;
	store_id: string;
	name: string;
	description?: string;
	link: string;
	store_url: string;
	image?: string;
	user_id: string;
	user_type?: string;
	type?: string;
	currency: string;
	lang: string;
	status: string;
	deleted: boolean;
	createdAt: string;
	updatedAt: string;
}

interface ICategoriesRes {
	success: boolean;
	message: string;
	data: {
		store: {
			id: number;
			store_id: string;
			name: string;
			description?: string;
			link: string;
			store_url: string;
			image?: string;
			user_id: string;
			user_type?: string;
			type?: string;
			currency: string;
			lang: string;
			status: string;
			deleted: boolean;
			createdAt: string;
			updatedAt: string;
			tbl_store_categories: ICategory[];
		};
	};
}

interface ICategoryRes {
	success: boolean;
	message: string;
	data: { category: ICategory };
}

interface IImage {
	name: string;
	url: string;
	business_id?: string;
	createdAt?: string;
	id?: number | string;
	image_id?: string;
	updatedAt?: string;
}

interface IProductsRes {
	success: boolean;
	message: string;
	data: {
		store: {
			id: number;
			store_id: string;
			name: string;
			description?: string;
			link: string;
			store_url: string;
			image?: string;
			user_id: string;
			user_type?: string;
			type?: string;
			currency: string;
			lang: string;
			status: string;
			deleted: boolean;
			createdAt: string;
			updatedAt: string;
			tbl_products: IStoreProduct[];
		};
	};
}
interface IProductRes {
	success: boolean;
	message: string;
	data: { product: IStoreProduct };
}

interface ISubcategoriesRes {
	success: boolean;
	message: string;
	data: {
		category: {
			id: number;
			store_category_id: string;
			store_id: string;
			title: string;
			description: string;
			image: string;
			status: string;
			deleted: false;
			createdAt: string;
			updatedAt: string;
			tbl_store: IStore;
			tbl_store_subcategories: ISubcategory[];
		};
	};
}

interface ISubcategoryRes {
	success: boolean;
	message: string;
	data: {
		subcategory: {
			id: number;
			store_subcategory_id: string;
			store_id: string;
			category_id: string;
			title: string;
			description: string;
			image: string;
			status: string;
			deleted: boolean;
			createdAt: string;
			updatedAt: string;
			tbl_store_category: ICategory;
		};
	};
}
interface ISubcategoriesOriginalRes {
	success: boolean;
	message: string;
	data: {
		subcategory: ISubcategory[];
	};
}

interface IProductsResBySubcategory {
	success: boolean;
	message: string;
	data: {
		subcategory: {
			id: number;
			store_subcategory_id: string;
			store_id: string;
			category_id: string;
			title: string;
			description: string;
			image: string;
			status: string;
			deleted: boolean;
			createdAt: string;
			updatedAt: string;
			tbl_products: IStoreProduct[];
		};
	};
}
