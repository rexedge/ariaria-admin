'use client';
import React, { useState, useRef } from 'react';
import Compressor from 'compressorjs';
import { generateUniqueID } from '@/lib/utils';
import { toast } from 'sonner';
import { PlusCircleIcon } from 'lucide-react';
import BlurImage from './blur-image';

interface MultipleImagesUploaderProps {
	folder?: string;
	handleFiles: (newImages: IImage[]) => void;
	text?: string;
	initialImages: IImage[];
}

const MultipleImagesUploader: React.FC<MultipleImagesUploaderProps> = (
	props
) => {
	const urls: string[] = props.initialImages.map((image) => image.url);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [imagePreviews, setImagePreviews] = useState<string[]>(urls);
	const hiddenFileInput = useRef<HTMLInputElement>(null);

	const uploadProfileImage = async (data: FormData) => {
		try {
			const response = await fetch(
				'https://developer.isce.app/v1/spaces/api/uploadFile',
				{
					method: 'POST',
					body: data,
				}
			);
			return await response.json();
		} catch (error) {
			return { data: null, message: 'Server error', success: 'false' };
		}
	};

	const uploadProfileImages = async (images: File[]) => {
		const maxAllowedSize = 10 * 1024 * 1024;
		const uploadedImages: IImage[] = [];

		for (const inputImage of images) {
			if (inputImage.size > maxAllowedSize) {
				// console.log('Image size must not be larger than 10MB');
				continue;
			}

			const imageName = `c4b-${generateUniqueID()}-${props.folder}`;
			const formData = new FormData();
			formData.append('file', inputImage);
			formData.append('folder', props.folder as string);
			formData.append('name', imageName);

			const response = await uploadProfileImage(formData);
			const singleImage: IImage = response.data;
			// console.log('Single Image.....', singleImage);

			if (response?.success === 'true') {
				uploadedImages.push(singleImage);
				// console.log('Uploaded successfully');
			} else {
				// console.log('Unable to upload file');
			}
		}

		if (uploadedImages.length > 0) {
			props.handleFiles(uploadedImages);
		}
	};

	const handleClick = () => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
		}
	};

	const handleImageSelection = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setIsLoading(true);
		const input = event.target;
		if (input.files && input.files.length > 0) {
			const inputImages = Array.from(input.files);
			const compressedImages = await Promise.all(
				inputImages.map(
					(inputImage) =>
						new Promise<File>((resolve, reject) => {
							new Compressor(inputImage, {
								quality: 0.7,
								success: (compressedImage) => {
									resolve(compressedImage as File);
								},
								error: (err) => {
									reject(err);
								},
							});
						})
				)
			);
			const newImageUrls = compressedImages.map((compressedImage) =>
				URL.createObjectURL(compressedImage)
			);
			// console.log(newImageUrls);
			setImagePreviews((prevImagePreviews) => [
				...prevImagePreviews,
				...newImageUrls,
			]);
			await uploadProfileImages(compressedImages);
			input.value = '';
			setIsLoading(false);
		} else {
			setIsLoading(false);
			// console.log('Unable to upload images');
		}
	};

	return (
		<>
			<div>
				<div>
					<div className='flex gap-3 flex-wrap'>
						{imagePreviews.map((imageUrl, index) => (
							<div
								key={index}
								className='relative max-w-52 aspect-[2/3] rounded-2xl overflow-hidden'
							>
								<BlurImage
									key={index}
									src={imageUrl}
									height={600}
									width={400}
									alt={`avatar-${index}`}
									className='w-52 aspect-[2/3] rounded-2xl object-cover'
								/>
								{/* <div
								onClick={() => {
									const newInitialImages = [
										...props.initialImages,
									];
									newInitialImages.splice(index, 1);
									props.handleFiles(
										newInitialImages
									); // Notify parent component
								}}
								className='absolute top-0 right-0 p-2 text-red-500 cursor-pointer'
							>
								<IconButton className='bg-white p-1 rounded-full overflow-hidden text-rose-500'>
									{<AppointmentDeleteIcon />}
								</IconButton>
							</div> */}
							</div>
						))}
						<div
							onClick={handleClick}
							className={`w-52 aspect-[2/3] rounded-2xl bg-gray-100 flex-col flex items-center justify-center`}
						>
							<div
								className={`${
									isLoading ? 'animate-spin' : ''
								}`}
							>
								{<PlusCircleIcon />}
							</div>
							<p className='text-sm text-center text-black'>
								{isLoading ? 'Uploading' : props.text}
							</p>
						</div>
					</div>
				</div>
				<input
					ref={hiddenFileInput}
					type='file'
					onChange={handleImageSelection}
					placeholder='image uploader'
					accept='image/*'
					className='hidden'
					disabled={isLoading}
					multiple // Allow multiple file selection
				/>
			</div>
			{isLoading && toast.info('uploading')}
		</>
	);
};

export default MultipleImagesUploader;
