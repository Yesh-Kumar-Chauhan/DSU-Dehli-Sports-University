import React, { SVGProps } from 'react';

const SvgLocalBar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9.23 9L12 12.11 14.77 9z' opacity={0.3} />
			<path d='M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM5.66 5h12.69l-1.78 2H7.43L5.66 5zM12 12.11L9.23 9h5.54L12 12.11z' />
		</svg>
	);
};

export default SvgLocalBar;
