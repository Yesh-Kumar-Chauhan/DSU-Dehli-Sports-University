import React, { SVGProps } from 'react';

const SvgSpeed = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44z' />
			<path d='M10.59 15.41a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z' />
		</svg>
	);
};

export default SvgSpeed;
