import React, { SVGProps } from 'react';

const SvgFreeCancellation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M5 6h14v2H5z' />
			<path d='M11.21 20H5V10h14v4.38l2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h8.21l-2-2zM5 6h14v2H5V6zm11.54 16.5L13 18.96l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zM10.41 14L12 15.59 10.59 17 9 15.41 7.41 17 6 15.59 7.59 14 6 12.41 7.41 11 9 12.59 10.59 11 12 12.41 10.41 14z' />
		</svg>
	);
};

export default SvgFreeCancellation;
