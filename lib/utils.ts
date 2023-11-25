import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatToNaira(amount: number): string {
	return amount.toLocaleString('en-NG', {
		style: 'currency',
		currency: 'NGN',
	});
}

export function getInitials(name: string): string {
	const words = name.trim().split(' ');

	if (words.length >= 2) {
		const firstInitial = words[0].charAt(0);
		const secondInitial = words[1].charAt(0);
		return `${firstInitial}${secondInitial}`;
	}

	return words[0].charAt(0);
}

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/ /g, '-') // Replace spaces with hyphens
		.replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters
		.replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
		.replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}

export function unslugify(slug: string): string {
	const words = slug.split('-');
	const final = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return final.join(' ');
}

/**
 * Takes a number and returns an Array of numbers matching the star ratings
 * @param {number} number
 * @returns {number[]}
 */
export function cNTA(number: number): number[] {
	if (number < 0 || number > 5) {
		throw new Error('Input number must be between 0 and 5');
	}

	const array: number[] = [0, 0, 0, 0, 0];

	for (let i = 0; i < 5; i++) {
		if (number >= 1) {
			array[i] = 1;
			number -= 1;
		} else if (number > 0) {
			array[i] = number;
			break;
		}
	}

	return array;
}

/**
 * Takes an array and returns a number matching the star ratings
 * @param {number[]} array
 * @returns {number}
 */
export function cATN(array: number[]): number {
	if (array.length !== 5) {
		throw new Error('Input array must have exactly 5 elements');
	}

	let number = 0;

	for (let i = 0; i < 5; i++) {
		number += array[i];
	}

	return number;
}

export function camelCase(inputString: string): string {
	const words: string[] = inputString.trim().split(/\s+/);
	if (words.length === 0) {
		return '';
	}
	const camelCased: string = words
		.map((word: string, index: number) => {
			if (index === 0) {
				return word.toLowerCase();
			} else {
				return (
					word.charAt(0).toUpperCase() +
					word.slice(1).toLowerCase()
				);
			}
		})
		.join('');

	return camelCased;
}

export function addOrdinalSuffix(day: number): string {
	if (day >= 11 && day <= 13) {
		return day + 'th';
	}
	const lastDigit = day % 10;
	let suffix = '';
	switch (lastDigit) {
		case 1:
			suffix = 'st';
			break;
		case 2:
			suffix = 'nd';
			break;
		case 3:
			suffix = 'rd';
			break;
		default:
			suffix = 'th';
	}
	return day + suffix;
}

export function formatDate(date: Date): string {
	const dateParts = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).formatToParts(date);
	let day = '';
	let month = '';
	let year = '';

	for (let i = 0; i < dateParts.length; i++) {
		const { type, value } = dateParts[i];
		switch (type) {
			case 'day':
				day = value;
				break;
			case 'month':
				month = value;
				break;
			case 'year':
				year = value;
				break;
		}
	}

	const dayWithOrdinal = addOrdinalSuffix(parseInt(day));
	return `${dayWithOrdinal} ${month}, ${year}`;
}

export const generateUniqueID = (): string => {
	const id = uuidv4();
	console.log(id);
	return id;
};
