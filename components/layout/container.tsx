export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className='w-full'>
			<div className='mx-auto max-w-ariaria'>{children}</div>
		</div>
	);
}
