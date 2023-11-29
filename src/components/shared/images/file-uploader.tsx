'use client';
import React, { useState, useRef } from 'react';
import Compressor from 'compressorjs';
import { generateUniqueID } from '@/src/lib/utils';
import BlurImage from './blur-image';
import { PenSquareIcon, PlusCircleIcon, UserCircleIcon, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';
import { toast } from 'sonner';

interface FileUploaderProps {
	image?: string;
	text?: string;
	folder?: string;
	fileName?: string | null;
	type?: 'circle' | 'portrait' | 'landscape';
	handleFile: (newImage: any) => void;
	className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = (props) => {
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [image, setImage] = useState<string>(props.image || '');
	const [name, setName] = useState<string>('');
	const [folder] = useState<string>(props.folder || 'unknown');
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const uploadProfileImage = async (data: FormData) => {
		setIsUploading(true);
		try {
			toast.info('Image Uploading');
			const response = await fetch(
				'https://developer.isce.app/v1/spaces/api/uploadFile',
				{
					method: 'POST',
					body: data,
				}
			);
			setIsUploading(false);
			toast.success('Image Uploaded');
			return await response.json();
		} catch (error) {
			setIsUploading(false);
			return { data: null, message: 'Server error', success: 'false' };
		}
	};

	const handleClick = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
		}
	};

	const handleChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target;
		if (input.files && input.files[0]) {
			const inputImage = input.files[0];

			new Compressor(inputImage, {
				quality: 1,
				success: async (compressedImage) => {
					const imageName = `ariaria-${generateUniqueID()}-${folder}`;
					const maxAllowedSize = 10 * 1024 * 1024;

					if (compressedImage.size > maxAllowedSize) {
						// console.log(
						// 	'Image size must not be larger than 10MB'
						// );
						input.value = '';
					} else {
						const formData = new FormData();
						formData.append('file', compressedImage);
						formData.append('folder', folder);
						formData.append('name', imageName);
						setImage(URL.createObjectURL(compressedImage));
						setName(inputImage.name);

						const response = await uploadProfileImage(
							formData
						);

						if (response?.success === 'true') {
							const newImage = response.data;
							setImage(newImage.url);
							setName(newImage.name);
							props.handleFile(newImage);
							// console.log('Uploaded successfully');
						} else {
							// console.log('Unable to upload file');
						}
					}
				},
				error: (err) => {
					// console.log('Image compression error:', err);
				},
			});
		} else {
			// console.log('Unable to upload image');
		}
	};
	const container = props.type === 'circle' ? 'h-[120px] w-[120px]' : '';
	const placeholder =
		props.type === 'circle'
			? 'rounded-full bg-slate-100 text-black'
			: 'flex-col';

	return (
		<>
			<div
				className={`${container} ${props.className} relative cursor-pointer`}
			>
				<div
					className={`flex items-start justify-center relative`}
					onClick={handleClick}
				>
					{image && image !== '' ? (
						<>
							<div className='px-3 py-2 bg-destructive text-white absolute top-0 left-0 z-50 rounded-br-lg'>
								<PenSquareIcon className='w-4 h-4' />
							</div>
							<BlurImage
								src={image as string}
								height={600}
								width={400}
								alt='avatar'
								className={`w-full h-full object-cover object-center overflow-clip bg-white ${
									props.type === 'circle'
										? 'rounded-full'
										: 'rounded'
								}`}
							/>
						</>
					) : (
						<Button
							className='w-full gap-2'
							type='button'
						>
							<DownloadIcon />
							{props.text}
						</Button>
					)}
				</div>
			</div>
			<input
				ref={hiddenFileInput}
				type='file'
				placeholder='Image'
				onChange={handleChange}
				accept='image/*'
				className='hidden'
			/>
		</>
	);
};

export default FileUploader;
